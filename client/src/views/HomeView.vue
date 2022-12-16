<!--
 Copyright (C) 2022 Kim Minh Thắng
 
 This file is part of CIC-Attendance-Lookup.
 
 CIC-Attendance-Lookup is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 
 CIC-Attendance-Lookup is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with CIC-Attendance-Lookup.  If not, see <http://www.gnu.org/licenses/>.
-->

<script setup>
import { ref } from "vue";
import moment from "moment";

const input = ref(null);
</script>
<template>
  <el-row justify="center">
    <img src="../assets/logo.png" alt="Octocat" width="200" />
  </el-row>
  <el-row>
    <el-input
      placeholder="Nhập mã số sinh viên của bạn"
      v-model="input"
      @change="handleChange"
    />
  </el-row>
  <el-row>
    <el-table
      :data="results"
      style="width: 100%"
      v-loading="loading"
      empty-text="Không có dữ liệu"
    >
      <el-table-column prop="event.time" label="Ngày">
        <template #default="scope">
          {{ moment(scope.row.event.time).calendar() }}
        </template>
      </el-table-column>
      <el-table-column label="Đã điểm danh">
        <template #default="scope">
          <el-button
            :type="btnTypes[scope.row.atype.id]"
            round
            plain
            size="small"
            >{{ scope.row.atype.name }}</el-button
          >
        </template>
      </el-table-column>
      <el-table-column prop="event.name" label="Tên sự kiện" />
      <el-table-column prop="event.description" label="Mô tả" />
    </el-table>
  </el-row>
</template>

<script>
import { ElNotification } from "element-plus";

import AttendanceService from "../services/attendance.service";

export default {
  data() {
    return {
      code: "",
      results: [],
      loading: false,
      btnTypes: ["primary", "success", "info", "warning", "danger"],
    };
  },
  methods: {
    handleChange(code) {
      this.code = code;

      this.loading = true;
      const timeout = setTimeout(async () => {
        try {
          const res = await AttendanceService.getByStudentCode(code);

          this.results = Object.keys(res.data)
            .map((e) => {
              return res.data[e];
            })
            .filter((e) => typeof e !== "number");
        } catch (error) {
          ElNotification({
            type: "error",
            title: "Không tìm thấy",
            message: error.message,
          });
          this.results = [];
        } finally {
          this.loading = false;
        }
      }, 1000);

      window.clearTimeout(timeout - 1);
    },
  },
};
</script>
