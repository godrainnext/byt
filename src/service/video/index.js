import request from "../index";

export const getVideoCommentById=(id)=>request.get({url:`/video/videoCommentById/${id}`})