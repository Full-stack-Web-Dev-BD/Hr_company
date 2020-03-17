import Add from './views/add/Add'
import AllShift from './views/Edit/Shift/AllShift'
import AllClient from './views/Edit/Client/AllClient'
import AllEmployee from './views/Edit/Employee/AllEmployee'
// add 
// all client 
// all employee
// all shift

var routes = [
  {
    path: "/add",
    name: "Add",
    icon: "tim-icons icon-calendar-60",
    component: Add,
    layout: "/admin"
  },
  {
    path: "/all-client",
    name: "All Clientt",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-pencil",
    component: AllClient,
    layout: "/admin"
  },
  {
    path: "/all-employee",
    name: "All Employee",
    icon: "tim-icons icon-pencil",
    component: AllEmployee,
    layout: "/admin"
  },
  {
    path: "/all-shift",
    name: "All Shift",
    icon: "tim-icons icon-tap-02",
    component:AllShift ,
    layout: "/admin"
  },
  // {
  //   path: "/flight-analytics",
  //   name: "Flight Analytics",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-send",
  //   component: FlightAnalytics,
  //   layout: "/admin"
  // }
];
export default routes;
