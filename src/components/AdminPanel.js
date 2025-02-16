import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaTruck, FaSpinner } from "react-icons/fa";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("supervisors");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", content: "" });

  const [supervisorForm, setSupervisorForm] = useState({
    name: "",
    nic: "",
    ward: "",
    district: "",
    municipalCouncil: "",
  });

  const [truckForm, setTruckForm] = useState({
    driverName: "",
    nic: "",
    numberPlate: "",
    supervisorId: "",
    ward: "",
    district: "",
    municipalCouncil: "",
  });

  const handleSupervisorSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", content: "" });

    try {
      const response = await fetch(
        "https://vatelanka-backend.vercel.app/api/admin/createSupervisor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(supervisorForm),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: "success",
          content: `Supervisor created successfully! ID: ${data.data.supervisorId}, Password: ${data.data.password}`,
        });
        setSupervisorForm({
          name: "",
          nic: "",
          ward: "",
          district: "",
          municipalCouncil: "",
        });
      } else {
        setMessage({ type: "error", content: data.error });
      }
    } catch (error) {
      setMessage({
        type: "error",
        content: "Failed to create supervisor. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTruckSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", content: "" });

    try {
      const response = await fetch(
        "https://vatelanka-backend.vercel.app/api/admin/createTruck",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(truckForm),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: "success",
          content: `Truck created successfully! ID: ${data.data.truckId}, Password: ${data.data.password}`,
        });
        setTruckForm({
          driverName: "",
          nic: "",
          numberPlate: "",
          supervisorId: "",
          ward: "",
          district: "",
          municipalCouncil: "",
        });
      } else {
        setMessage({ type: "error", content: data.error });
      }
    } catch (error) {
      setMessage({
        type: "error",
        content: "Failed to create truck. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-customGreen p-6">
            <h1 className="text-3xl font-bold text-white text-center">
              Admin Panel
            </h1>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab("supervisors")}
                className={`flex items-center px-6 py-4 ${
                  activeTab === "supervisors"
                    ? "border-b-2 border-green-500 text-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <FaUserTie className="mr-2" />
                Supervisor Management
              </button>
              <button
                onClick={() => setActiveTab("trucks")}
                className={`flex items-center px-6 py-4 ${
                  activeTab === "trucks"
                    ? "border-b-2 border-green-500 text-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <FaTruck className="mr-2" />
                Truck Management
              </button>
            </nav>
          </div>

          {/* Message Display */}
          {message.content && (
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

          {/* Form Sections */}
          <div className="p-6">
            {activeTab === "supervisors" ? (
              <form onSubmit={handleSupervisorSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Ward
                    </label>
                    <input
                      type="text"
                      value={supervisorForm.ward}
                      onChange={(e) =>
                        setSupervisorForm({
                          ...supervisorForm,
                          ward: e.target.value,
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      District
                    </label>
                    <input
                      type="text"
                      value={supervisorForm.district}
                      onChange={(e) =>
                        setSupervisorForm({
                          ...supervisorForm,
                          district: e.target.value,
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Municipal Council
                    </label>
                    <input
                      type="text"
                      value={supervisorForm.municipalCouncil}
                      onChange={(e) =>
                        setSupervisorForm({
                          ...supervisorForm,
                          municipalCouncil: e.target.value,
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
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
            ) : (
              <form onSubmit={handleTruckSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      NIC
                    </label>
                    <input
                      type="text"
                      value={truckForm.nic}
                      onChange={(e) =>
                        setTruckForm({ ...truckForm, nic: e.target.value })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
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
                          numberPlate: e.target.value,
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Supervisor ID
                    </label>
                    <input
                      type="text"
                      value={truckForm.supervisorId}
                      onChange={(e) =>
                        setTruckForm({
                          ...truckForm,
                          supervisorId: e.target.value,
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Ward
                    </label>
                    <input
                      type="text"
                      value={truckForm.ward}
                      onChange={(e) =>
                        setTruckForm({ ...truckForm, ward: e.target.value })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      District
                    </label>
                    <input
                      type="text"
                      value={truckForm.district}
                      onChange={(e) =>
                        setTruckForm({ ...truckForm, district: e.target.value })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Municipal Council
                    </label>
                    <input
                      type="text"
                      value={truckForm.municipalCouncil}
                      onChange={(e) =>
                        setTruckForm({
                          ...truckForm,
                          municipalCouncil: e.target.value,
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
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
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminPanel;
