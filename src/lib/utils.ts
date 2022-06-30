const userRootPath = (userType: string): string => {
  switch (userType) {
    case "admin":
      return "/admin/";
      break;

    case "teacher":
      return "/teacher/";
      break;

    case "student":
      return "/student/";
      break;

    default:
      return "/login";
      break;
  }
};

export { userRootPath };
