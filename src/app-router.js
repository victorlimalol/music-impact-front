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
            </Routes>
        </Router>
    );
}

export default App;