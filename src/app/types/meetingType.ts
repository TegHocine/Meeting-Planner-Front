export type RoomType = {
  id: string;
  name: string;
  capacity: number;
  equipment: string;
};

export type MeetingType = {
  id: string;
  startTime: string;
  endTime: string;
  date: string;
  nbrPeople: number;
  type: string;
  room: RoomType;
  equipmentList: string;
};
