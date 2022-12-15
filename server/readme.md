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

## Endpoint

### Get full Event list
**GET** `/api/events`
Example response:
```json
[
    {
        "id": 1,
        "name": "Lập trình sinh viên CICTCPC - Vòng loại",
        "description": "Lập trình sinh viên CICTCPC - Vòng loại"
    },
    {
        "id": 2,
        "name": "Lập trình sinh viên CICTCPC - Vòng chung kết",
        "description": "Lập trình sinh viên CICTCPC - Vòng chung kết"
    },
    {
        "id": 3,
        "name": "Ngày hội Phần mềm Tự do Nguồn mở",
        "description": "Ngày hội Phần mềm Tự do Nguồn mở"
    },
    {
        "id": 4,
        "name": "Chuyên đề \"Xây dựng website với ReactJS\"",
        "description": "Chuyên đề Xây dựng website với ReactJS"
    },
]
```

### Get Attendance List by Student Code
**GET** `/api/attendance/by-code/:code`
Example Response:
```json
{
    "0": {
        "event": {
            "id": 1,
            "name": "Lập trình sinh viên CICTCPC - Vòng loại",
            "description": "Lập trình sinh viên CICTCPC - Vòng loại",
            "time": "2022-08-28T06:00:00.000Z"
        },
        "atype": {
            "id": 4,
            "name": "Ban tổ chức"
        }
    },
    "1": {
        "event": {
            "id": 2,
            "name": "Lập trình sinh viên CICTCPC - Vòng chung kết",
            "description": "Lập trình sinh viên CICTCPC - Vòng chung kết",
            "time": "2022-09-05T11:00:00.000Z"
        },
        "atype": {
            "id": 4,
            "name": "Ban tổ chức"
        }
    },
    "2": {
        "event": {
            "id": 9,
            "name": "Chuyên đề \"Blockchain và những ảnh hưởng trong thời đại 4.0\"",
            "description": "Chuyên đề \"Blockchain và những ảnh hưởng trong thời đại 4.0\"",
            "time": "2022-11-23T11:30:00.000Z"
        },
        "atype": {
            "id": 4,
            "name": "Ban tổ chức"
        }
    },
    "3": {
        "event": {
            "id": 5,
            "name": "Chuyên đề \"Chào mừng K48\"",
            "description": "Chuyên đề Chào mừng K48",
            "time": "2022-10-21T11:30:00.000Z"
        },
        "atype": {
            "id": 4,
            "name": "Ban tổ chức"
        }
    },
    "4": {
        "event": {
            "id": 7,
            "name": "Chuyên đề \"Kỹ năng cho các cuộc thi về ATTT\"",
            "description": "Chuyên đề về kỹ năng cho các cuộc thi ATTT",
            "time": "2022-11-05T11:30:00.000Z"
        },
        "atype": {
            "id": 4,
            "name": "Ban tổ chức"
        }
    },
    ...
    "uid": 1
}
```
