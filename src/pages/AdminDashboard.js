import React, { useState, useEffect } from "react"; 
import axios from "axios"; 
import { useNavigate } from 'react-router-dom';

// Simple modal component for the form
const ProjectFormModal = ({ project, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        title: '', description: '', image: '', liveUrl: '', githubUrl: '',
    });

    useEffect(() => {
        if (project) {
            setFormData(project);
        }
    }, [project]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>{project ? 'Edit Project' : 'Add Project'}</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
                    <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
                    <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
                    <input name="liveUrl" value={formData.liveUrl} onChange={handleChange} placeholder="Live URL" />
                    <input name="githubUrl" value={formData.githubUrl} onChange={handleChange} placeholder="GitHub URL" />
                    <button type="submit" className="submit-button">Save</button>
                    <button type="button" onClick={onCancel} className="submit-button" style={{backgroundColor: '#6c757d', marginLeft: '10px'}}>Cancel</button>
                </form>
            </div>
        </div>
    );
};


const AdminDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const navigate = useNavigate();

    const api = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
    });
    
    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/projects`);
        setProjects(data);
    };

    const handleSaveProject = async (projectData) => {
        try {
            if (editingProject) {
                // Update
                await api.put(`/projects/${editingProject._id}`, projectData);
            } else {
                // Create
                await api.post('/projects', projectData);
            }
            fetchProjects();
            closeModal();
        } catch (error) {
            console.error('Failed to save project:', error);
            if (error.response.status === 401 || error.response.status === 403) {
                alert('Session expired. Please log in again.');
                handleLogout();
            }
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await api.delete(`/projects/${id}`);
                fetchProjects();
            } catch (error) {
                console.error('Failed to delete project:', error);
                if (error.response.status === 401 || error.response.status === 403) {
                    alert('Session expired. Please log in again.');
                    handleLogout();
                }
            }
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/login');
    };

    const openModal = (project = null) => {
        setEditingProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setEditingProject(null);
        setIsModalOpen(false);
    };
    
    return (
        <div style={{ padding: '100px 10%' }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
                <h2>Admin Dashboard</h2>
                <div>
                    <button onClick={() => openModal()} className="submit-button">Add Project</button>
                    <button onClick={handleLogout} className="submit-button" style={{backgroundColor: '#dc3545', marginLeft: '10px'}}>Logout</button>
                </div>
            </div>

            {isModalOpen && <ProjectFormModal project={editingProject} onSave={handleSaveProject} onCancel={closeModal} />}

            <div style={{ overflowX: 'auto' }}>
                <table style={{width: '100%', borderCollapse: 'collapse'}}>
                    <thead>
                        <tr style={{borderBottom: '1px solid var(--secondary-color)'}}>
                            <th style={{padding: '10px', textAlign: 'left'}}>Title</th>
                            <th style={{padding: '10px', textAlign: 'left'}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map(p => (
                            <tr key={p._id} style={{borderBottom: '1px solid var(--secondary-color)'}}>
                                <td style={{padding: '10px'}}>{p.title}</td>
                                <td style={{padding: '10px'}}>
                                    <button onClick={() => openModal(p)} style={{marginRight: '10px'}}>Edit</button>
                                    <button onClick={() => handleDelete(p._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;