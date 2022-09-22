import * as request from "~/utils/request";

export const searchSuggestionService = async (q,type='less') => {
    try {
      const res = await request.get("users/search", {
        params: {
          q,
          type
        },
      });
      return res.data
    } catch (error) {
      // Tìm cách backup khi error
    }
  }