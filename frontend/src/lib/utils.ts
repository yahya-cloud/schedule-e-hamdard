const userRootPath = (user: any): string => {
	switch (user.user_type) {
		case "admin":
			return "/admin/";

		case "teacher":
			return "/teacher/";

		case "student":
			let section = user.section;
			return `/student/section/${section}`;

		default:
			return "/login";
	}
};

const resolve = (path: string, obj: any): string => {
	return path.split(".").reduce(function (prev, curr) {
		return prev ? prev[curr] : null;
	}, obj);
};

export { userRootPath, resolve };
