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

<template>
  <el-container>
    <el-header>
      <div class="header__inner">
        <router-link to="/" class="logo">
          <h2>CIC Attendance Lookup</h2>
        </router-link>
        <nav>
          <router-link to="/about"> About </router-link>
          <a
            href="https://github.com/CTU-ITClub/CIC-Attendance-Lookup"
            target="_blank"
          >
            Github
          </a>
        </nav>
      </div>
    </el-header>
    <el-main style="width: 1024px; max-width: 100%; margin: 0 auto">
      <router-view />
    </el-main>
  </el-container>
</template>

<style scoped>
.el-header {
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
}
.header__inner {
  width: 1024px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav a {
  margin: 0 10px;
  color: #666;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
.logo {
  color: #000;
  text-decoration: none;
  font-weight: bold;
}
</style>
