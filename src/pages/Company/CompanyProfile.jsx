import React from 'react';
import { FaUserCircle, FaChevronRight, FaKey, FaMoneyBillAlt, FaCog, FaUsers, FaShareAlt, FaInfoCircle } from 'react-icons/fa';

const CompanyProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-10">
      <div className="bg-white rounded-lg w-full p-6">
        {/* User Info */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <FaUserCircle className="text-4xl text-gray-600 mr-3" />
            <div>
              <p className="text-lg font-semibold">jo******@gmail.com</p>
              <p className="text-sm text-gray-500">Company Account</p>
            </div>
          </div>
          <FaChevronRight className="text-gray-400" />
        </div>

        {/* Security Settings */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 uppercase mb-2">Security settings</p>
          <div className="flex items-center">
            <FaKey className="text-green-500 mr-3" />
            <p className="font-medium">Key Security</p>
          </div>
        </div>

        {/* Payment Settings */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 uppercase mb-2">Payment settings</p>
          <div className="flex items-center">
            <FaMoneyBillAlt className="text-green-500 mr-3" />
            <p className="font-medium">Payment Priority</p>
          </div>
        </div>

        {/* General Settings */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 uppercase mb-2">General</p>
          <div className="flex items-center">
            <FaCog className="text-orange-500 mr-3" />
            <p className="font-medium">Settings</p>
          </div>
        </div>

        {/* Community */}
        <div className="mb-4">
          <div className="flex items-center">
            <FaUsers className="text-yellow-500 mr-3" />
            <p className="font-medium">Community</p>
          </div>
        </div>

        {/* Share */}
        <div className="mb-4">
          <div className="flex items-center">
            <FaShareAlt className="text-blue-500 mr-3" />
            <p className="font-medium">Share</p>
          </div>
        </div>

        {/* About Us */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaInfoCircle className="text-purple-500 mr-3" />
            <p className="font-medium">About Us <span className="text-xs text-gray-500">v2.0.0</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;