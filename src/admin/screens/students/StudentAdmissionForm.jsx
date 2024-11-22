import React, { useState } from "react";
import { TextInput, Label, Button, Select } from "flowbite-react";

const StudentAdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    admissionDate: "",
    dateOfBirth: "",
    bloodGroup: "",
    gender: "",
    class: "",
    section: "",
    fatherName: "",
    motherName: "",
    fatherOccupation: "",
    phone: "",
    email: "",
    address: "",
    guardianName: "",
    guardianPhone: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Student admission form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        admissionDate: "",
        dateOfBirth: "",
        bloodGroup: "",
        gender: "",
        class: "",
        rollNo: "",
        section: "",
        fatherName: "",
        motherName: "",
        fatherOccupation: "",
        phone: "",
        email: "",
        address: "",
        guardianName: "",
        guardianPhone: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First name is required.";
    if (!formData.lastName) errors.lastName = "Last name is required.";
    if (!formData.admissionDate) errors.admissionDate = "Admission date is required.";
    if (!formData.dateOfBirth) errors.dateOfBirth = "Date of birth is required.";
    if (!formData.bloodGroup) errors.bloodGroup = "Blood group is required.";
    if (!formData.gender) errors.gender = "Gender is required.";
    if (!formData.class) errors.class = "Class is required.";
    if (!formData.rollNo) errors.class = "Roll no is required.";
    if (!formData.section) errors.section = "Section is required.";
    if (!formData.fatherName) errors.fatherName = "Father's name is required.";
    if (!formData.motherName) errors.motherName = "Mother's name is required.";
    if (!formData.fatherOccupation) errors.fatherOccupation = "Father's occupation is required.";
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.address) errors.address = "Address is required.";
    if (!formData.guardianName) errors.guardianName = "Guardian name is required.";
    if (!formData.guardianPhone) errors.guardianPhone = "Guardian phone number is required.";
    return errors;
  };

  return (
    <div className="max-w-lg w-full mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Student Admission Form</h1>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-4">
          <Label htmlFor="firstName" value="First Name" />
          <TextInput
            id="firstName"
            name="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
            color={errors.firstName ? "failure" : "default"}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <Label htmlFor="lastName" value="Last Name" />
          <TextInput
            id="lastName"
            name="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
            color={errors.lastName ? "failure" : "default"}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>

        {/* Admission Date */}
        <div className="mb-4">
          <Label htmlFor="admissionDate" value="Admission Date" />
          <TextInput
            id="admissionDate"
            name="admissionDate"
            type="date"
            value={formData.admissionDate}
            onChange={handleChange}
            color={errors.admissionDate ? "failure" : "default"}
          />
          {errors.admissionDate && (
            <p className="text-red-500 text-sm mt-1">{errors.admissionDate}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <Label htmlFor="dateOfBirth" value="Date of Birth" />
          <TextInput
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            color={errors.dateOfBirth ? "failure" : "default"}
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
          )}
        </div>

        {/* Blood Group */}
        <div className="mb-4">
          <Label htmlFor="bloodGroup" value="Blood Group" />
          <Select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            color={errors.bloodGroup ? "failure" : "default"}
          >
            <option value="">Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </Select>
          {errors.bloodGroup && (
            <p className="text-red-500 text-sm mt-1">{errors.bloodGroup}</p>
          )}
        </div>

        {/* Gender */}
        <div className="mb-4">
          <Label htmlFor="gender" value="Gender" />
          <Select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            color={errors.gender ? "failure" : "default"}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
        </div>

        {/* Father's Name */}
        <div className="mb-4">
          <Label htmlFor="fatherName" value="Father's Name" />
          <TextInput
            id="fatherName"
            name="fatherName"
            placeholder="Enter father's name"
            value={formData.fatherName}
            onChange={handleChange}
            color={errors.fatherName ? "failure" : "default"}
          />
          {errors.fatherName && <p className="text-red-500 text-sm mt-1">{errors.fatherName}</p>}
        </div>

        {/* Mother's Name */}
        <div className="mb-4">
          <Label htmlFor="motherName" value="Mother's Name" />
          <TextInput
            id="motherName"
            name="motherName"
            placeholder="Enter mother's name"
            value={formData.motherName}
            onChange={handleChange}
            color={errors.motherName ? "failure" : "default"}
          />
          {errors.motherName && <p className="text-red-500 text-sm mt-1">{errors.motherName}</p>}
        </div>

        {/* Father's Occupation */}
        <div className="mb-4">
          <Label htmlFor="fatherOccupation" value="Father's Occupation" />
          <TextInput
            id="fatherOccupation"
            name="fatherOccupation"
            placeholder="Enter father's occupation"
            value={formData.fatherOccupation}
            onChange={handleChange}
            color={errors.fatherOccupation ? "failure" : "default"}
          />
          {errors.fatherOccupation && (
            <p className="text-red-500 text-sm mt-1">{errors.fatherOccupation}</p>
          )}
        </div>

        {/* Class */}
        <div className="mb-4">
          <Label htmlFor="class" value="Class" />
          <TextInput
            id="class"
            name="class"
            placeholder="Enter class"
            value={formData.class}
            onChange={handleChange}
            color={errors.class ? "failure" : "default"}
          />
          {errors.class && <p className="text-red-500 text-sm mt-1">{errors.class}</p>}
        </div>
        {/* Roll No */}
        <div className="mb-4">
          <Label htmlFor="Roll No" value="Roll No" />
          <TextInput
            id="class"
            name="Roll No"
            placeholder="Enter Roll"
            value={formData.rollNo}
            onChange={handleChange}
            color={errors.class ? "failure" : "default"}
          />
          {errors.class && <p className="text-red-500 text-sm mt-1">{errors.class}</p>}
        </div>

        {/* Section */}
        <div className="mb-4">
          <Label htmlFor="section" value="Section" />
          <TextInput
            id="section"
            name="section"
            placeholder="Enter section"
            value={formData.section}
            onChange={handleChange}
            color={errors.section ? "failure" : "default"}
          />
          {errors.section && <p className="text-red-500 text-sm mt-1">{errors.section}</p>}
        </div>

        {/* Submit Button */}
        <Button type="submit" gradientDuoTone="cyanToBlue" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default StudentAdmissionForm;
