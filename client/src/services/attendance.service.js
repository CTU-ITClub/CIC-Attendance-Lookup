import request from "../utils/request";

const AttendanceService = {
  async getByStudentCode(code) {
    try {
      const res = await request.get(`attendance/by-code/${code}`);

      return res;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default AttendanceService;
