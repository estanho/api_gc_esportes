const yupError = (error: any) => {
  const validationErrors = error.inner.map((error: any) => ({
    field: error.path,
    type: error.type,
    message: error.message,
  }));

  //console.error("🛑 yup Error:", error.message);

  return { errors: validationErrors };
};

export { yupError };
