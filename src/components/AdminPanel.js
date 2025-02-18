import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaTruck, FaSpinner } from "react-icons/fa";
import { initializeFirebase } from "../firebase/firebaseConfig";
import {
  fetchMunicipalCouncils,
  fetchDistricts,
  fetchWards,
  fetchSupervisors,
  createSupervisor,
  createTruck,
} from "../firebase/firebaseOperations";

const AdminPanel = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", content: "", form: "" });
  const [municipalCouncils, setMunicipalCouncils] = useState([]);
  const [supervisorDistricts, setSupervisorDistricts] = useState([]);
  const [supervisorWards, setSupervisorWards] = useState([]);
  const [truckDistricts, setTruckDistricts] = useState([]);
  const [truckWards, setTruckWards] = useState([]);
  const [supervisors, setSupervisors] = useState([]);

  const [supervisorForm, setSupervisorForm] = useState({
    name: "",
    nic: "",
    email: "",
    ward: "",
    district: "",
    municipalCouncil: "",
  });

  const [truckForm, setTruckForm] = useState({
    driverName: "",
    nic: "",
    email: "",
    numberPlate: "",
    supervisorId: "",
    ward: "",
    district: "",
    municipalCouncil: "",
  });

  const validateNIC = (nic) => {
    const nicPattern = /^(\d{12}|\d{9}[vV])$/;
    return nicPattern.test(nic);
  };

  const validateNumberPlate = (plate) => {
    const platePattern = /^[A-Z]{2}\d{4}$/;
    return platePattern.test(plate);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  useEffect(() => {
    const init = async () => {
      try {
        await initializeFirebase();
        const councilsList = await fetchMunicipalCouncils();
        setMunicipalCouncils(councilsList);
      } catch (error) {
        setMessage({
          type: "error",
          content: "Failed to initialize application. Please refresh the page.",
          form: "both",
        });
      }
    };

    init();
  }, []);

  useEffect(() => {
    const loadDistricts = async () => {
      if (supervisorForm.municipalCouncil) {
        try {
          const districtsList = await fetchDistricts(
            supervisorForm.municipalCouncil
          );
          setSupervisorDistricts(districtsList);
          setSupervisorForm((prev) => ({ ...prev, district: "", ward: "" }));
        } catch (error) {
          console.error("Error loading districts:", error);
        }
      } else {
        setSupervisorDistricts([]);
      }
    };

    loadDistricts();
  }, [supervisorForm.municipalCouncil]);

  useEffect(() => {
    const loadDistricts = async () => {
      if (truckForm.municipalCouncil) {
        try {
          const districtsList = await fetchDistricts(
            truckForm.municipalCouncil
          );
          setTruckDistricts(districtsList);
          setTruckForm((prev) => ({
            ...prev,
            district: "",
            ward: "",
            supervisorId: "",
          }));
        } catch (error) {
          console.error("Error loading districts:", error);
        }
      } else {
        setTruckDistricts([]);
      }
    };

    loadDistricts();
  }, [truckForm.municipalCouncil]);

  useEffect(() => {
    const loadWards = async () => {
      if (supervisorForm.municipalCouncil && supervisorForm.district) {
        try {
          const wardsList = await fetchWards(
            supervisorForm.municipalCouncil,
            supervisorForm.district
          );
          setSupervisorWards(wardsList);
          setSupervisorForm((prev) => ({ ...prev, ward: "" }));
        } catch (error) {
          console.error("Error loading wards:", error);
        }
      } else {
        setSupervisorWards([]);
      }
    };

    loadWards();
  }, [supervisorForm.municipalCouncil, supervisorForm.district]);

  useEffect(() => {
    const loadWards = async () => {
      if (truckForm.municipalCouncil && truckForm.district) {
        try {
          const wardsList = await fetchWards(
            truckForm.municipalCouncil,
            truckForm.district
          );
          setTruckWards(wardsList);
          setTruckForm((prev) => ({ ...prev, ward: "", supervisorId: "" }));
        } catch (error) {
          console.error("Error loading wards:", error);
        }
      } else {
        setTruckWards([]);
      }
    };

    loadWards();
  }, [truckForm.municipalCouncil, truckForm.district]);

  useEffect(() => {
    const loadSupervisors = async () => {
      if (truckForm.municipalCouncil && truckForm.district && truckForm.ward) {
        try {
          const supervisorsList = await fetchSupervisors(
            truckForm.municipalCouncil,
            truckForm.district,
            truckForm.ward
          );
          setSupervisors(supervisorsList);
        } catch (error) {
          console.error("Error loading supervisors:", error);
        }
      } else {
        setSupervisors([]);
      }
    };

    loadSupervisors();
  }, [truckForm.municipalCouncil, truckForm.district, truckForm.ward]);

  const handleSupervisorSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", content: "", form: "" });

    if (!validateNIC(supervisorForm.nic.trim())) {
      setMessage({
        type: "error",
        content:
          "Invalid NIC format. Please use 12 digits or 9 digits followed by 'v'",
        form: "supervisor",
      });
      setLoading(false);
      return;
    }

    if (!validateEmail(supervisorForm.email.trim())) {
      setMessage({
        type: "error",
        content: "Invalid email format",
        form: "supervisor",
      });
      setLoading(false);
      return;
    }

    try {
      const data = await createSupervisor({
        name: supervisorForm.name.trim(),
        nic: supervisorForm.nic.trim(),
        email: supervisorForm.email.trim(),
        ward: supervisorForm.ward.trim(),
        district: supervisorForm.district.trim(),
        municipalCouncil: supervisorForm.municipalCouncil.trim(),
      });

      setMessage({
        type: "success",
        content: `Supervisor created successfully! ID: ${data.data.supervisorId}, Password: ${data.data.password}`,
        form: "supervisor",
      });

      setSupervisorForm({
        name: "",
        nic: "",
        email: "",
        ward: "",
        district: "",
        municipalCouncil: "",
      });
    } catch (error) {
      setMessage({
        type: "error",
        content: error.message || "Failed to create supervisor",
        form: "supervisor",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTruckSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", content: "", form: "" });

    if (!validateNIC(truckForm.nic.trim())) {
      setMessage({
        type: "error",
        content:
          "Invalid NIC format. Please use 12 digits or 9 digits followed by 'v'",
        form: "truck",
      });
      setLoading(false);
      return;
    }

    if (!validateNumberPlate(truckForm.numberPlate.trim())) {
      setMessage({
        type: "error",
        content:
          "Invalid number plate format. Please use 2 capital letters followed by 4 numbers (e.g., AB1234)",
        form: "truck",
      });
      setLoading(false);
      return;
    }

    if (!validateEmail(truckForm.email.trim())) {
      setMessage({
        type: "error",
        content: "Invalid email format",
        form: "truck",
      });
      setLoading(false);
      return;
    }

    try {
      const data = await createTruck({
        driverName: truckForm.driverName.trim(),
        nic: truckForm.nic.trim(),
        email: truckForm.email.trim(),
        numberPlate: truckForm.numberPlate.trim().toUpperCase(),
        supervisorId: truckForm.supervisorId,
        ward: truckForm.ward,
        district: truckForm.district,
        municipalCouncil: truckForm.municipalCouncil,
      });

      setMessage({
        type: "success",
        content: `Truck created successfully! ID: ${data.data.truckId}, Password: ${data.data.password}`,
        form: "truck",
      });

      setTruckForm({
        driverName: "",
        nic: "",
        email: "",
        numberPlate: "",
        supervisorId: "",
        ward: "",
        district: "",
        municipalCouncil: "",
      });
    } catch (error) {
      setMessage({
        type: "error",
        content: error.message || "Failed to create truck",
        form: "truck",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Admin Panel
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Supervisor Creation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="bg-green-500 p-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <FaUserTie className="mr-2" />
                Supervisor Management
              </h2>
            </div>

            {message.form === "supervisor" && message.content && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 ${
                  message.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message.content}
              </motion.div>
            )}

            <div className="p-6">
              <form onSubmit={handleSupervisorSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  {/* Supervisor Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      value={supervisorForm.name}
                      onChange={(e) =>
                        setSupervisorForm({
                          ...supervisorForm,
                          name: e.target.value,
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={supervisorForm.email}
                      onChange={(e) =>
                        setSupervisorForm({
                          ...supervisorForm,
                          email: e.target.value,
                        })
                      }
                      placeholder="example@email.com"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>

                  {/* Supervisor NIC Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      NIC
                    </label>
                    <input
                      type="text"
                      value={supervisorForm.nic}
                      onChange={(e) =>
                        setSupervisorForm({
                          ...supervisorForm,
                          nic: e.target.value,
                        })
                      }
                      placeholder="123456789v or 123456789012"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Format: 12 digits or 9 digits followed by 'v'
                    </p>
                  </div>

                  {/* Municipal Council Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Municipal Council
                    </label>
                    <select
                      value={supervisorForm.municipalCouncil}
                      onChange={(e) =>
                        setSupervisorForm({
                          ...supervisorForm,
                          municipalCouncil: e.target.value,
                          district: "",
                          ward: "",
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    >
                      <option value="">Select Municipal Council</option>
                      {municipalCouncils.map((council) => (
                        <option key={council.id} value={council.id}>
                          {council.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* District Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      District
                    </label>
                    <select
                      value={supervisorForm.district}
                      onChange={(e) =>
                        setSupervisorForm({
                          ...supervisorForm,
                          district: e.target.value,
                          ward: "",
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                      disabled={!supervisorForm.municipalCouncil}
                    >
                      <option value="">Select District</option>
                      {supervisorDistricts.map((district) => (
                        <option key={district.id} value={district.id}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Ward Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Ward
                    </label>
                    <select
                      value={supervisorForm.ward}
                      onChange={(e) =>
                        setSupervisorForm({
                          ...supervisorForm,
                          ward: e.target.value,
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                      disabled={!supervisorForm.district}
                    >
                      <option value="">Select Ward</option>
                      {supervisorWards.map((ward) => (
                        <option key={ward.id} value={ward.id}>
                          {ward.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="animate-spin mr-2" />
                        Creating...
                      </>
                    ) : (
                      "Create Supervisor"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Truck Creation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="bg-green-500 p-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <FaTruck className="mr-2" />
                Truck Management
              </h2>
            </div>

            {message.form === "truck" && message.content && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 ${
                  message.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message.content}
              </motion.div>
            )}

            <div className="p-6">
              <form onSubmit={handleTruckSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  {/* Driver Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Driver Name
                    </label>
                    <input
                      type="text"
                      value={truckForm.driverName}
                      onChange={(e) =>
                        setTruckForm({
                          ...truckForm,
                          driverName: e.target.value,
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={truckForm.email}
                      onChange={(e) =>
                        setTruckForm({
                          ...truckForm,
                          email: e.target.value,
                        })
                      }
                      placeholder="example@email.com"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>

                  {/* Driver NIC Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      NIC
                    </label>
                    <input
                      type="text"
                      value={truckForm.nic}
                      onChange={(e) =>
                        setTruckForm({
                          ...truckForm,
                          nic: e.target.value,
                        })
                      }
                      placeholder="123456789v or 123456789012"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Format: 12 digits or 9 digits followed by 'v'
                    </p>
                  </div>

                  {/* Number Plate Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Number Plate
                    </label>
                    <input
                      type="text"
                      value={truckForm.numberPlate}
                      onChange={(e) =>
                        setTruckForm({
                          ...truckForm,
                          numberPlate: e.target.value.toUpperCase(),
                        })
                      }
                      placeholder="AB1234"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Format: 2 capital letters followed by 4 numbers (e.g.,
                      AB1234)
                    </p>
                  </div>

                  {/* Municipal Council Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Municipal Council
                    </label>
                    <select
                      value={truckForm.municipalCouncil}
                      onChange={(e) =>
                        setTruckForm({
                          ...truckForm,
                          municipalCouncil: e.target.value,
                          district: "",
                          ward: "",
                          supervisorId: "",
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    >
                      <option value="">Select Municipal Council</option>
                      {municipalCouncils.map((council) => (
                        <option key={council.id} value={council.id}>
                          {council.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* District Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      District
                    </label>
                    <select
                      value={truckForm.district}
                      onChange={(e) =>
                        setTruckForm({
                          ...truckForm,
                          district: e.target.value,
                          ward: "",
                          supervisorId: "",
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                      disabled={!truckForm.municipalCouncil}
                    >
                      <option value="">Select District</option>
                      {truckDistricts.map((district) => (
                        <option key={district.id} value={district.id}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Ward Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Ward
                    </label>
                    <select
                      value={truckForm.ward}
                      onChange={(e) =>
                        setTruckForm({
                          ...truckForm,
                          ward: e.target.value,
                          supervisorId: "",
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                      disabled={!truckForm.district}
                    >
                      <option value="">Select Ward</option>
                      {truckWards.map((ward) => (
                        <option key={ward.id} value={ward.id}>
                          {ward.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Supervisor Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Supervisor
                    </label>
                    <select
                      value={truckForm.supervisorId}
                      onChange={(e) =>
                        setTruckForm({
                          ...truckForm,
                          supervisorId: e.target.value,
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                      disabled={!truckForm.ward}
                    >
                      <option value="">Select Supervisor</option>
                      {supervisors.map((supervisor) => (
                        <option key={supervisor.id} value={supervisor.id}>
                          {supervisor.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="animate-spin mr-2" />
                        Creating...
                      </>
                    ) : (
                      "Create Truck"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
