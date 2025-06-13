import { useEffect, useState } from "react";
import axios from "axios";

export const AdminProjects = () => {
    const [projects, setProjects] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editId, setEditId] = useState(null); // for update mode

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: null,
        liveLink: "",
    });

    const fetchProjects = async () => {
        try {
            const res = await axios.get("https://portfolio-ecac.onrender.com/admin/projects", {
                withCredentials: true,
            });
            const projectsList = res.data.map(project => ({
                _id: project._id,
                name: project.name,
                description: project.description,
                url: project.url,
                liveLink: project.liveLink,
            }));
            setProjects(projectsList);
        } catch (err) {
            console.error("Failed to fetch projects", err);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "project") {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const resetForm = () => {
        setFormData({ name: "", description: "", image: null });
        setEditId(null);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!editId) {
                // Upload image
                const imageForm = new FormData();
                imageForm.append("project", formData.image);

                const uploadRes = await axios.post(
                    "https://portfolio-ecac.onrender.com/admin/project/upload",
                    imageForm,
                    {
                        withCredentials: true,
                        headers: { "Content-Type": "multipart/form-data" },
                    }
                );
                const payload = {
                    name: formData.name,
                    description: formData.description,
                    url: uploadRes.data,
                    liveLink: formData.liveLink,
                };


                await axios.post("https://portfolio-ecac.onrender.com/admin/projects/add", payload, {
                    withCredentials: true,
                });
                alert("Project added successfully!");

            }
            else {
                const payload = {
                    name: formData.name,
                    description: formData.description,
                    liveLink: formData.liveLink,
                };

                await axios.put(`https://portfolio-ecac.onrender.com/admin/projects/${editId}/update`, payload, {
                    withCredentials: true,
                });
                alert("Project updated successfully!");


            }
            resetForm();
            fetchProjects();

        } catch (err) {
            console.error("Error submitting project", err);
            alert("Failed to submit project.");
        }
    };

    const handleEdit = (project) => {
        setFormData({
            name: project.name,
            description: project.description,
            image: null, // can't load image file
        });
        setEditId(project._id);
        setShowForm(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white p-10">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">Admin Project Management</h1>
                <button
                    onClick={() => {
                        setShowForm(!showForm);
                        resetForm();
                    }}
                    className="bg-yellow-300 text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
                >
                    {showForm ? "Close Form" : "Add Project"}
                </button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded-xl shadow-xl mb-10 space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Project Name"
                        className="w-full border p-2 rounded"
                        required
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Project Description"
                        className="w-full border p-2 rounded"
                        required
                    />
                    <input
                        type="file"
                        name="project"
                        onChange={handleInputChange}
                        accept="image/*"
                        className="w-full border p-2 rounded"
                        required={!editId}
                    />
                    <input
                        type="text"
                        name="liveLink"
                        value={formData.liveLink}
                        onChange={handleInputChange}
                        placeholder="Deployed Live Link"
                        className="w-full border p-2 rounded"
                        required
                    />
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        {editId ? "Update" : "Submit"}
                    </button>
                </form>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.length === 0 && <p className="text-center">No projects available.</p>}
                {projects.map((project) => (
                    <div key={project._id} className="bg-white text-black p-4 rounded-xl shadow-lg relative">
                        <img src={project.url} alt={project.name} className="w-full h-40 object-cover rounded-md" />
                        <h2 className="text-xl font-bold mt-3">{project.name}</h2>
                        <p>{project.description}</p>
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline mt-2 inline-block"
                        >
                            View Live
                        </a>
                        <button
                            onClick={() => handleEdit(project)}
                            className="absolute top-2 right-2 bg-yellow-400 text-sm px-3 py-1 rounded hover:bg-yellow-500"
                        >
                            Edit
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
