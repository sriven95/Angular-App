export interface User {
  uName : String,
  email : String,
  pwd : String,
  token : String,
  update_dt  : Date,
  isAdmin:Boolean,
  isDp:Boolean
}

export interface Bookings {
  user_email : String,
    tripType : String,
    fromPlace : String,
    toPlace : String,
    fromDate : Date
    toDate : Date,
    count:Boolean,
    luggage : String,
    flight_name : String,
    timing : String,
    passenger_name1 : String,
    passenger_name2 : String,
    status : String,
    name : String,
    email : String,
    phnum : String,
    comment :String,
}
