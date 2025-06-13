import { useEffect, useState } from "react";
import axios from "axios";

export const AdminSkills = () => {
  const [skills, setSkills] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    skillname: "",
    description: "",
    image: null,
  });

  const fetchSkills = async () => {
    try {
      const res = await axios.get("https://portfolio-ecac.onrender.com/admin/skills");
      console.log("Fetched skills:", res.data);
      const skillsList = res.data.map(skill => ({
        _id: skill._id, 
        skillname: skill.name,
        description: skill.description,
        image: skill.url
        }));
      setSkills(skillsList);
      console.log("Skills state updated:", skillsList);
      
    } catch (err) {
      console.error("Failed to fetch skills", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    try{
    if (name === "skill") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
}
catch(error){
  console.error("Error handling input change", error);
}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Upload image
      const imageForm = new FormData();
      imageForm.append("skill", formData.image);
      const imageRes = await axios.post("https://portfolio-ecac.onrender.com/admin/upload", imageForm, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Image uploaded successfully:", imageRes);

      // 2. Add skill with uploaded image URL
      const res = await axios.post("https://portfolio-ecac.onrender.com/admin/skills/add", {
        name: formData.skillname,
        description: formData.description,
        url: imageRes.data,
      }, { withCredentials: true });

      alert("Skill added successfully!");
      setShowForm(false);
      fetchSkills(); // refresh skills list
    } catch (err) {
      console.error("Error adding skill", err);
      alert("Failed to add skill.");
    }
  };

useEffect(() => {
  const fetchData = async () => {
    await fetchSkills();
  };
  fetchData();
}, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-fuchsia-600 p-10 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Admin Skill Management</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-yellow-300 text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
        >
          {showForm ? "Close Form" : "Add Skill"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded-xl shadow-xl mb-10 space-y-4">
          <input
            type="text"
            name="skillname"
            value={formData.skillname}
            onChange={handleInputChange}
            placeholder="Skill Name"
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="file"
            name="skill"
            onChange={handleInputChange}
            accept="image/*"
            className="w-full border p-2 rounded"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      )}

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.length === 0 && <p className="text-center text-gray-500">No skills available</p>}
        {skills.map((skill) => (
          <div key={skill._id} className="bg-white text-black rounded-xl overflow-hidden shadow-lg p-4">
            <img src={skill.image} alt={skill.skillname} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-xl font-bold mt-3">{skill.skillname}</h2>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
