import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faAngleDown,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

import RiskChart from './RiskChart';

export default function RiskTable({}) {
  const [ options, setOptions ] = useState({
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    xaxis: {
      categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN']
    },
    yaxis: {
      min: 0,
      tickAmount: 9,
      opposite: true,
    },
    stroke: {
      curve: 'straight',
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false,
    },
    grid: {
      show: true,
      yaxis: {
        lines: {
          show: true
        }
      },
      xaxis: {
        lines: {
          show: true
        }
      },
    },
  });

  const [ series, setSeries ] = useState([
    {
      name: "series-1",
      data: [6, 6, 6, 6, 6, 6, 6, 8, 8, 10, 10, 10, 12]
    },
    {
      name: "series-2",
      data: [6, 6, 6, 6, 6, 6, 6, 8, 8, 10, 10, 10, 12]
    },
    {
      name: "series-3",
      data: [6, 6, 6, 6, 6, 6, 6, 8, 8, 10, 10, 10, 12]
    }
  ]);

  const [ optionsExpand, setOptionsExpand ] = useState({
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN']
    },
    yaxis: {
      min: 0,
      tickAmount: 9,
      opposite: true,
    },
    stroke: {
      curve: 'straight',
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false,
    },
    grid: {
      show: true,
      yaxis: {
        lines: {
          show: true
        }
      },
      xaxis: {
        lines: {
          show: true
        }
      },
    },
  });

  const [ seriesExpand, setSeriesExpand ] = useState([
    {
      name: "series-1",
      data: [6, 6, 6, 6, 6, 6, 6, 8, 8, 10, 10, 10, 12]
    },
  ]);

  const [ selectedRisk, setSelectedRisk ] = useState(-1);
  const selRisk = (index: number) => {
    if (selectedRisk === index) {
      setSelectedRisk(-1);
    } else {
      setSelectedRisk(index);
    }
  };

  const renderExpand = (index: number, name: string, score: number, max: number, trend: number) => {
    if (selectedRisk === index) {
      return (
        <tr className="bg-white border-b text-left">
          <td className="px-5 whitespace-nowrap text-sm font-medium text-gray-900">
          </td>
          <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
            <div>{name}</div>
            <span className='px-1 bg-slate-200'>Basis</span> <span className='px-1 bg-slate-200'>Graph</span> <span className='px-1 bg-slate-200'>Peer Compare</span>
          </td>
          <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
            <span className='bg-slate-200 rounded-full px-3 py-1.5 mr-1.5'>{score}</span>
            /{max}
          </td>
          <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
            <FontAwesomeIcon icon={faArrowUp} className="inline w-2" />
            <span className='bg-slate-200 px-3 py-1.5 ml-1.5'>{trend}</span>
          </td>
        </tr>
      );
    }

    return (<></>);
  };

  const renderAngle = (index: number) => {
    if (selectedRisk === index) {
      return (
        <FontAwesomeIcon icon={faAngleDown} />
      );
    }

    return (
      <FontAwesomeIcon icon={faAngleRight} />
    );
  };

  return (
    <div>
      <h1 className='text-2xl font-bold'>Risk Indicators</h1>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 w-5 text-left px-6">
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Risk Indicator <FontAwesomeIcon icon={faArrowDown} className="inline w-2" />
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Risk Score/Max <FontAwesomeIcon icon={faArrowDown} className="inline w-2" />
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Trend <FontAwesomeIcon icon={faArrowDown} className="inline w-2" />
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Risk Indicators Over Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-t text-left">
                    <td className="px-5 whitespace-nowrap text-sm font-medium text-gray-900" onClick={() => selRisk(0)}>
                      {renderAngle(0)}
                    </td>
                    <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap" onClick={() => selRisk(0)}>
                      Access to Critical Assets
                    </td>
                    <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                      <span className='bg-slate-200 rounded-full px-3 py-1.5 mr-1.5'>9</span>
                      /10
                    </td>
                    <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                      <FontAwesomeIcon icon={faArrowUp} className="inline w-2" />
                      <span className='bg-slate-200 px-3 py-1.5 ml-1.5'>9</span>
                    </td>
                    <td rowSpan={10} className="text-sm text-gray-900 font-normal">
                      <RiskChart selectedRisk={selectedRisk} options={options} series={series} type="area" optionsExpand={optionsExpand} seriesExpand={seriesExpand} />
                    </td>
                  </tr>

                  {renderExpand(0, 'Emails Outside Normal Behavior', 9, 10, 9)}
                  {renderExpand(0, 'Emails Outside Normal Behavior', 9, 10, 9)}
                  {renderExpand(0, 'Emails Outside Normal Behavior', 9, 10, 9)}

                  <tr className="bg-white border-t text-left">
                    <td className="px-5 whitespace-nowrap text-sm font-medium text-gray-900" onClick={() => selRisk(1)}>
                      {renderAngle(1)}
                    </td>
                    <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap" onClick={() => selRisk(1)}>
                      Data Exfiltration
                    </td>
                    <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                      <span className='bg-slate-200 rounded-full px-3 py-1.5 mr-1.5'>9</span>
                      /10
                    </td>
                    <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                      <FontAwesomeIcon icon={faArrowUp} className="inline w-2" />
                      <span className='bg-slate-200 px-3 py-1.5 ml-1.5'>9</span>
                    </td>
                  </tr>

                  {renderExpand(1, 'Emails Outside Normal Behavior', 9, 10, 9)}
                  {renderExpand(1, 'Emails Outside Normal Behavior', 9, 10, 9)}
                  {renderExpand(1, 'Emails Outside Normal Behavior', 9, 10, 9)}

                  <tr className="bg-white border-t text-left">
                    <td className="px-5 whitespace-nowrap text-sm font-medium text-gray-900" onClick={() => selRisk(2)}>
                      {renderAngle(2)}
                    </td>
                    <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap" onClick={() => selRisk(2)}>
                      Flight Risk
                    </td>
                    <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                      <span className='bg-slate-200 rounded-full px-3 py-1.5 mr-1.5'>9</span>
                      /10
                    </td>
                    <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                      <FontAwesomeIcon icon={faArrowUp} className="inline w-2" />
                      <span className='bg-slate-200 px-3 py-1.5 ml-1.5'>9</span>
                    </td>
                  </tr>

                  {renderExpand(2, 'Emails Outside Normal Behavior', 9, 10, 9)}
                  {renderExpand(2, 'Emails Outside Normal Behavior', 9, 10, 9)}
                  {renderExpand(2, 'Emails Outside Normal Behavior', 9, 10, 9)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
