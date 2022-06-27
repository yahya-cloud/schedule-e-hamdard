import { TeacherInfoType, TimeTableType } from "../@types/global";

const teacher = (
  arry: TeacherInfoType[],
  id: string
): TeacherInfoType | undefined => {
  let teacherDetail: TeacherInfoType | undefined = arry.find(
    (el) => el.teacher_info._id === id
  );
  return teacherDetail;
};

const getRGBA = (color: string): string => {
  return color.replace(")", ", 0.1)").replace("rgb", "rgba");
};

const getDayClasses = (
  day: Date,
  arry: TimeTableType[] | undefined
): TimeTableType[] | undefined => {
  let selectedDay = new Date(day.setHours(0, 0, 0));
  let nextDay = new Date(day.setHours(0, 0, 0));
  nextDay.setDate(selectedDay.getDate() + 1);
  let newArry = arry?.filter(
    (el) => new Date(el.start) > selectedDay && new Date(el.end) < nextDay
  );
  return newArry;
};

export { teacher, getRGBA, getDayClasses };
