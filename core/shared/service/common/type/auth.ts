export type PostSendEmailVerifyCodePayload = {
  email: string;
};

export type PostConfirmEmailVerifyCodePayload = {
  email: string;
  verifyCode: string;
};
