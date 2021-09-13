import request from "../index";

export const getVideoCommentById=(id)=>request.get({url:`/video/videoCommentById/${id}`})
export const getCommentInnerById=(id)=>request.get({url:`comment/video/${id}`})