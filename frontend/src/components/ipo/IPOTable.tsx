import React from 'react';
import { Eye, Trash2, Plus } from 'lucide-react';
import { IPO } from '../../types';

interface IPOTableProps {
  ipos: IPO[];
  title: string;
}

export const IPOTable: React.FC<IPOTableProps> = ({ ipos, title }) => {
  const getStatusColor = (status: IPO['status']) => {
    switch (status) {
      case 'Ongoing':
        return 'bg-green-100 text-green-800';
      case 'Coming':
        return 'bg-yellow-100 text-yellow-800';
      case 'New Listed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Register IPO</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price Band
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Open
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Close
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issue Size
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issue Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Listing Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delete/View
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {ipos.map((ipo) => (
                <tr key={ipo.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{ipo.company}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{ipo.priceBand}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{ipo.open}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{ipo.close}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{ipo.issueSize}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{ipo.issueType}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{ipo.listingDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(ipo.status)}`}>
                      {ipo.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="bg-indigo-600 text-white px-3 py-1 rounded text-xs hover:bg-indigo-700 transition-colors">
                      Update
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button className="text-red-600 hover:text-red-700 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-700 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
                1
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                2
              </button>
              <span className="px-2 text-sm text-gray-600">...</span>
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                9
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                10
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};