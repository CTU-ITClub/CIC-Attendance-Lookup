<!--
 Copyright (C) 2022 Le Van Dat
 
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

<template>
  <el-alert
    title="Đã chốt danh sách điểm danh"
    type="warning"
    description="Hiện tại danh sách điểm danh đã được gửi về Đoàn Khoa, vì vậy CLB sẽ không giải quyết bất kỳ phản hồi bổ sung nào về điểm danh chuyên đề từ thời gian này, khi nào điểm rèn luyện được nhập lên htql CLB sẽ thông báo để các bạn kiểm tra, trân trọng!"
    close-text="Đóng"
    show-icon
  />
</template>
<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>