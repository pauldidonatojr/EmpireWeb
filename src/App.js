import { Routes, Route } from "react-router-dom";
import Login from './Login';
import React, { useState } from "react";
import AdminHomePage from './Admin/homepage'
import CareGiverHomePage from './CareGiver/Homepage'
import PatientHomePage from './Patient/homepage'
import VisitDetails from './CareGiver/VisitDetails'
import PatientDetails from "./CareGiver/PatientDetails";
import CareGiver from "./Admin/CareGiver";
import Visits from "./Admin/Visit/Visit";
import Action from './Admin/Action/Action';
import Billing from './Admin/Billing/Billing';
import Report from "./Admin/Report/Report";
import Admin from "./Admin/Admin/Admin";
import CallDashBoard from "./Admin/Visit/CallDashBoard";
import PendingQueuePlacement from "./Admin/Action/PendingQueuePlacement";
import InvoiceSearch from "./Admin/Billing/InvoiceSearch"
import ElectronicBilling from "./Admin/Billing/ElectronicBilling"
import BillingReport from "./Admin/Report/Billing";
import EVVException from "./Admin/Report/EVVException";
import UserManagement from "./Admin/Admin/UserManagement";
import CordinatorSetup from "./Admin/Admin/CordinatorSetup";
import FileProcessing from "./Admin/Admin/FileProcessing";
import EDIImports from "./Admin/Admin/EDIImports"
import { AuthContext, LoginContext } from './components/context';
import ProtectedRoute from "./utils/ProtectedRoute";
import MemberDetails from "./Admin/MemberDetails/MemberDetails";
import CareGiverDetail from "./Admin/CareGiverDetail";
import BatchDetails from "./Admin/BatchDetails";
import InvoiceDetails from "./Admin/InvoiceDetails";
import SFTPHome from './SFTP/Homepage'
import MemberDetailsSFTP from "./SFTP/MemberDetails/MemberDetails";
import CareGiverDetailSFTP from "./SFTP/CareGiverDetail";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const initialLoginState = {
    isLoading: false,
    userName: null,
    userPassword: null,
    userType: null,
  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userType: action.usertype,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          isLoading: false,
        };
      case 'RETRIVE_TOKEN':
        return {
          ...prevState,
          isLoading: false,
        };
    }
  }

  const authContext = React.useMemo(() => ({
    signIn: async (un, ut, pwd) => {
      try {
        // await AsyncStorage.setItem('Username', un)
      } catch (e) {
        // saving error
      }
      setLoggedIn(true)
      dispatch({ type: 'LOGIN', id: un, usertype: ut });
    },

    signOut: () => {
      setLoggedIn(false)
      dispatch({ type: 'LOGOUT' });
    },
  }), []);


  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  return (
    <AuthContext.Provider value={authContext}>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoute routeType={1} loggedIn={loggedIn} loginType={loginState.userType} />}>
          <Route path="/AdminHome" element={<AdminHomePage />}></Route>
          <Route path="/CareGiver" element={<CareGiver />}></Route>
          <Route path="/Visit" element={<Visits />}></Route>
          <Route path="/Action" element={<Action />}></Route>
          <Route path="/Billing" element={<Billing />}></Route>
          <Route path="/Report" element={<Report />}></Route>
          <Route path="/Admin" element={<Admin />}></Route>
          <Route path="/CallDashBoard" element={<CallDashBoard />}></Route>
          <Route path="/PendingQueuePlacement" element={<PendingQueuePlacement />}></Route>
          <Route path="/InvoiceSearch" element={<InvoiceSearch />}></Route>
          <Route path="/ElectronicBilling" element={<ElectronicBilling />}></Route>
          <Route path="/BillingReport" element={<BillingReport />}></Route>
          <Route path="/EVVException" element={<EVVException />}></Route>
          <Route path="/UserManagement" element={<UserManagement />}></Route>
          <Route path="/CordinatorSetup" element={<CordinatorSetup />}></Route>
          <Route path="/FileProcessing" element={<FileProcessing />}></Route>
          <Route path="/EDIImports" element={<EDIImports />}></Route>
          <Route path="/MemberDetails" element={<MemberDetails />} />
          <Route path="/CareGiverDetail" element={<CareGiverDetail />} />
          <Route path="/BatchDetails" element={<BatchDetails />} />
          <Route path="/InvoiceDetails" element={<InvoiceDetails />} />
        </Route>


        <Route element={<ProtectedRoute routeType={2} loggedIn={loggedIn} loginType={loginState.userType} />}>
          <Route path="/CareGiverHome" element={<CareGiverHomePage />}></Route>
          <Route path="/visitdetails/:id" element={<VisitDetails />}></Route>
          <Route path="/patientdetails/:id" element={<PatientDetails />}></Route>
        </Route>

        <Route element={<ProtectedRoute routeType={3} loggedIn={loggedIn} loginType={loginState.userType} />}>
          <Route path="/PatientHome" element={<PatientHomePage />}></Route>
          <Route path="/visitdetails/:id" element={<VisitDetails />}></Route>
        </Route>


        <Route element={<ProtectedRoute routeType={4} loggedIn={loggedIn} loginType={loginState.userType} />}>
          <Route path="/SFTPHome" element={<SFTPHome />}></Route>
          <Route path="/CareGiverDetailSFTP" element={<CareGiverDetailSFTP />} />
          <Route path="/MemberDetailsSFTP" element={<MemberDetailsSFTP />} />
        </Route>


      </Routes>

    </AuthContext.Provider>
  );
};

export default App;
