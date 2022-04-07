import React, { Component } from "react";

export default class Doctor extends Component {
  render() {
    return (
      <div className="mt-40 px-auto lg:px-40">
        <div className="my-4 flex justify-center items-center text-2xl font-medium">
          <h1>Doctors</h1>
        </div>
        <table className="min-w-full divide-y divide-gray-200 h-full ">
          <thead className="bg-gray-50 ">
            <tr>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Hospital
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Age
              </th>

              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Patients
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {/* {allplaces.map((place, index) => ( */}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">DT627</div>
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Luvenia Ravi
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Pinevalley General Hospital
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center   text-gray-900">47</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                108{" "}
              </td>
            </tr>
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">DT929</div>
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Elena Naveen
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Goldvalley Hospital Center
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center   text-gray-900">32</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                133
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">DT176</div>
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Edelgard Quinto
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Snowflake General Hospital
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center   text-gray-900">36</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                314
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">DT439</div>
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Tamila Adriana
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Amity Hospital Center
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center   text-gray-900">41</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                258
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">DT847</div>
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Keti Hedvig
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Lowland Medical Center
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center   text-gray-900">37</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                299
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">DT294</div>
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Lorenz Aurangzeb
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Principal Hospital
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center   text-gray-900">32</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                231
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">DT385</div>
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Hugo Nermin
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Green Country Hospital Center
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center   text-gray-900">46</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                22
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">DT249</div>
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Emma Haifa
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                New Horizons Medical Clinic
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center   text-gray-900">39</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                7
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">DT108</div>
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Mort Christian
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Heart Center Hospital Center
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center   text-gray-900">39</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                217
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
        <div className="my-10">
          <div className="flex items-center justify-center">
            <button className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-8">
              Edit
            </button>
            <button className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-8">
              Print
            </button>
          </div>
        </div>
      </div>
    );
  }
}
