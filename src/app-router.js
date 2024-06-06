import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import LoginPage from './pages/LoginPage';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage';
import PlansPage from './pages/PlansPage';
import AdminHomePage from './pages/AdminHomePage';
import AdminListAllTeachers from './pages/AdminListAllTeachers';
import AdminListAllStudents from './pages/AdminListAllStudents';
import AdminListAllCourse from './pages/AdminListAllCourses';
import AdminAddStudent from './pages/AdminAddStudent';
import AdminAddTeacher from './pages/AdminAddTeacher';
import AdminAddCourse from './pages/AdminAddCourse';
import AdminGetStudent from './pages/AdminGetStudent';
import AdminGetTeacher from './pages/AdminGetTeacher';
import AdminEditStudent from './pages/AdminEditStudent';
import AdminEditTeacher from './pages/AdminEditTeacher';
import AdminGetCourse from './pages/AdminGetCourse';
import AdminEditCourse from './pages/AdminEditCourse';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/plans" element={<PlansPage />} />

                <Route path="/admin/home" element={<AdminHomePage />} />
                <Route path="/admin/teachers" element={<AdminListAllTeachers />} />
                <Route path="/admin/students" element={<AdminListAllStudents />} />
                <Route path="/admin/courses" element={<AdminListAllCourse />} />
                <Route path="/admin/add/student" element={<AdminAddStudent />} />
                <Route path="/admin/add/teacher" element={<AdminAddTeacher />} />
                <Route path="/admin/add/course" element={<AdminAddCourse />} />
                <Route path="/admin/students/:id" element={<AdminGetStudent />} />
                <Route path="/admin/teacher" element={<AdminGetTeacher />} />
                <Route path="/admin/course" element={<AdminGetCourse />} />
                <Route path="/admin/edit/student/:id" element={<AdminEditStudent />} />
                <Route path="/admin/edit/teacher/:id" element={<AdminEditTeacher />} />
                <Route path="/admin/edit/course/:id" element={<AdminEditCourse />} />
            </Routes>
        </Router>
    );
}

export default App;