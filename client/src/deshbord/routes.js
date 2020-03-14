import Add from './views/add/Add'
import EditInternationalFlight from './views/EditFlight/EditInternationalFlight'
import GenerateInvoice from './views/GenerateInvoice'
import FlightAnalytics from './views/FlightAnalytics'
import EditDomesticFlight from "./views/EditFlight/EditDomesticFlight.js";

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
    path: "/edit-international-flight",
    name: "Edit International Flight",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-pencil",
    component: EditInternationalFlight,
    layout: "/admin"
  },
  {
    path: "/edit-domestic-flight",
    name: "Edit Domestic Flight",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-pencil",
    component: EditDomesticFlight,
    layout: "/admin"
  },
  {
    path: "/invoice-generator",
    name: "Invoice Generator",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-tap-02",
    component: GenerateInvoice,
    layout: "/admin"
  },
  {
    path: "/flight-analytics",
    name: "Flight Analytics",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-send",
    component: FlightAnalytics,
    layout: "/admin"
  }
];
export default routes;
