// import React, { useCallback, useEffect, useState,useMemo } from 'react'
// // import {useTable,useGlobalFilter,useFilters} from 'react-table'
// // import MOCK_DATA from './MOCK_DATA (1).json'
// import axios from 'axios'
// // import GlobalFilter from '../Component/GlobalFilter'
// // import { Column } from '../Component/Column'
// import { Column2 } from './Column2'
// // import { useNavigate } from 'react-router-dom'
// const AddHrLists = () => {
//     const[users,setUser]=useState([])
//     const [file, setFile] = useState()
//     // const navigate = useNavigate()
//     function handleSubmit(event) {
//         event.preventDefault()
//         const url = 'http://localhost:8000/placementPortalHr/company/upload';
//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('fileName', file.name);
//         const config = {
//           headers: {
//             'content-type': 'multipart/form-data',
//           },
//         };
//         axios.post(url, formData, config).then((response) => {
//           response.json()
//           console.log(response.data);
//         });       
//     }
   
//     const fetchdata = async()=>
//     {
        
//        const result= await axios.get("http://localhost:8000/placementPortalHr/company")
//         setUser(result.data)
//     }
   
//     useEffect(()=>
//     {
//        fetchdata() 
//     },[fetchdata])

//  const columns = useMemo(() => Column2,[])
//     const data = useMemo(() => users,[])

//     const tableinstance=useTable({
//         columns,
//         data
//     },useFilters,useGlobalFilter)

//     const{getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,state,setGlobalFilter}=tableinstance
  
//   const{globalFilter}=state
 
//   return (
//     <div>
//     <div className='container-lg'>
//         {/* <div className='container p-5 mt-5 border bg-warning border-5' > */}
//         <form onSubmit={handleSubmit}>
//           <h1>React File Upload</h1>
//           <input type="file" onChange={(e)=> setFile(e.target.files[0])}/>
//           <button type="submit">Upload</button>
//         </form>
//         </div>
//         {/* </div> */}
//         <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
//     <table {...getTableProps} className='table table-warning table-striped'>
//         <thead >
//             {headerGroups.map((headerGroup) => (
//                 <tr{...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column)=>(
//                     <th {...column.getHeaderProps()}>
//                         {column.render('Header')}
//                         <div>{column.canFilter ? column.render('Filter'):null}</div>
//                     </th>
//                 ))}
//                 </tr>
//             ))}
//         </thead>
//         <tbody {...getTableBodyProps}>
//             {rows.map((row) => {
//                 prepareRow(row)
//                 return(
//                     <tr {...row.getRowProps()}>
//                       {row.cells.map((cell)=>{
//                         return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                       })}
//                     </tr>
//                 )
//             })}
//         </tbody>
//     </table>
      
//     </div>
  
//   )
// }

// export default AddHrLists;
