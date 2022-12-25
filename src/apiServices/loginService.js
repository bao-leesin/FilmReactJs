import * as request from "~/utils/request";


export const loginService = async () => {
    try {
      const res = await request.get("read");
      return res.data
    } catch (error) {
      // Tìm cách backup khi error
    }
  }