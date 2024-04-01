import React from 'react';
import { memo } from 'react';
// import './onlineOfflineTable.css';

function OnlineOfflineTable({ onlineList, offlineList }) {
//   console.log(onlineList, offlineList);

  // const maxLength = Math.max(onlineList.length, offlineList.length);
const maxLength=7;
  const paddedOnlineList = [...onlineList, ...Array(maxLength - onlineList.length).fill(null)];
  const paddedOfflineList = [...offlineList, ...Array(maxLength - offlineList.length).fill(null)];

  return (
    <div>
      <table className="table-fixed bg-zinc-600 text-white border-collapse border border-slate-500 border-solid drop-shadow-lg text-center place-items-center">
    <thead>
        <tr className='flex flex-row justify-around space-x-16'>
            <th className="text-3xl m-0.5 p-1 border border-slate-600 flex flex-row items-center">
                <p>Online Players</p> 
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1434fea2e92f9c0ad547d19b287e8172e6a25dd0cf3cddfb4bb0b0f5f3a51dfd?apiKey=1477cbc897df4fa28e1ddba6fd23de63" className="image size-14" alt="Online Players"/>
            </th> 
            <th className="text-3xl m-0.5 p-1 border border-slate-600 flex flex-row items-center">
                <p>Offline Players</p>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ea41de6c61a8bba5e2c046f7faf78f588302e1263e4ad2ba09c74df20080f2b?apiKey=1477cbc897df4fa28e1ddba6fd23de63" className="image size-14" alt="Offline Players"/>
            </th>
        </tr>
        </thead>
        <tbody className="tbody bg-zinc-800  ">
          {[...Array(maxLength).keys()].map((index) => (
            <tr key={index}>
              <td>
                {paddedOnlineList[index] && (
                  <div className="tr flex flex-row justify-between align-middle text-2xl space-x-3  p-1.5 border text-center place-items-center ">
                    <img src={paddedOnlineList[index].PlayerIcon} alt={paddedOnlineList[index].displayName}  className="image size-14"/>
                    <p>{paddedOnlineList[index].displayName}</p>
                    <button>
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/09627d3f9a87b609e0b00b9c7c6c6e828f423d54dfb37b0af610f2edbba725ae?apiKey=1477cbc897df4fa28e1ddba6fd23de63" className="image size-10" alt="chat"/>
                    </button>
                    <button>
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9206af1eba9483498837d333f535829a8a44877035e2a1dfba28b849245ca46d?apiKey=1477cbc897df4fa28e1ddba6fd23de63&%22" className="image size-10" alt="battle"/>
                    </button>
                    <button>
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3974d307fc3bb7c6f682a1f7ec5970c6372c5d9c17961bb4cc007f44eb8095bc?apiKey=1477cbc897df4fa28e1ddba6fd23de63" className="image size-10" alt="more"/>
                    </button>
                  </div>
                )}
              </td>
              <td>
                {paddedOfflineList[index] && (
                  <div className="tr flex flex-row justify-between align-middle text-2xl space-x-3   p-1.5 border text-center place-items-center">
                    <img src={paddedOfflineList[index].PlayerIcon} alt={paddedOfflineList[index].displayName} className="image size-14" />
                    <p>{paddedOfflineList[index].displayName}</p>
                    <button>chat</button>
                    <button>battle</button>
                    <button>more</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// export default memo(OnlineOfflineTable) ;
export default OnlineOfflineTable;