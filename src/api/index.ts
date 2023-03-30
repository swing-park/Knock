import { baseAxios, reqWithAccessToken } from "./instance";
import {
  LoginReq,
  SignUpReq,
  PositionItem,
  AdminCategory,
  Categoriesput,
  CategoryDel,
  EditBookmark,
  PostToBookmark,
  FindIdItem,
  findIdCodeItem,
  FindPwItem,
  findPwCodeItem,
} from "types";

export const LOGIN = {
  login: (loginReq: LoginReq) => baseAxios.post("/login", loginReq),
};

export const ADMIN = {
  signUp: (signUpReq: SignUpReq) =>
    reqWithAccessToken.post("/signup", signUpReq),
  checkEmail: (email: string) =>
    reqWithAccessToken.get(`/check/email/${email}`),
  checkName: (memberName: string) =>
    reqWithAccessToken.get(`/check/name/${memberName}`),
  member: () => reqWithAccessToken.get(`/members`),
  position: (positionItem: PositionItem) =>
    reqWithAccessToken.put(
      `/member/${positionItem.positionID}/position`,
      positionItem
    ),
};

export const CATEGORY = {
  getCategories: () =>
    reqWithAccessToken.get("/getCategories").then((res) => res.data),
  categoryAdd: (category: AdminCategory) =>
    reqWithAccessToken.post(`/category`, category),
  categoryPut: (categoriesput: Categoriesput) =>
    reqWithAccessToken.put(`/category/${categoriesput.id}`, categoriesput),
  categoryDel: (categoryDel: CategoryDel) =>
    reqWithAccessToken.delete(`/category/${categoryDel.id}`),
};

export const FIND = {
  findId: (findId: FindIdItem) => baseAxios.post("/sms", findId),
  findIdCode: (idcode: findIdCodeItem) =>
    baseAxios.post("/member/email", idcode),

  findPw: (findPw: FindPwItem) => baseAxios.post("/mail/auth", findPw),

  findPwCode: (pwcode: findPwCodeItem) =>
    baseAxios.post(`/member/pwd/${pwcode.authenticationCode}`, pwcode),
};

export const SEARCH = {
  getSearchedData: (keyword: string) =>
    reqWithAccessToken.get(`/search?k=${keyword}`),
  getCategoryData: (category: string) =>
    reqWithAccessToken.get(`/category?c=${category}`),
};

export const MYPAGE = {
  getMyPosts: () =>
    reqWithAccessToken.get("/mypage/posts").then((res) => res.data),
};

export const BOOKMARK = {
  getBookmarks: () =>
    reqWithAccessToken.get("/bookmark/folders").then((res) => res.data),
  getBookmark: (folderId: number) =>
    reqWithAccessToken.get(`/bookmark/folder/${folderId}/bookmarks`),
  addBookmark: (bookMarkFolderName: string) =>
    reqWithAccessToken.post("/bookmark/folder", { bookMarkFolderName }),
  editBookmark: ({ folderId, bookMarkFolderName }: EditBookmark) =>
    reqWithAccessToken.put(`/bookmark/folder/${folderId}`, {
      bookMarkFolderName,
    }),
  deleteBookmark: (folderId: number) =>
    reqWithAccessToken.delete(`/bookmark/folder/${folderId}`),
  addPostToBookmark: ({ folderId, postId }: PostToBookmark) =>
    reqWithAccessToken.post(`/bookmark/folder/${folderId}/post/${postId}`),
  deletePostToBookmark: ({ folderId, postId }: PostToBookmark) =>
    reqWithAccessToken.delete(`/bookmark/folder/${folderId}/post/${postId}`),
};
