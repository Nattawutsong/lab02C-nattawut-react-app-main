import { useState, useEffect } from "react";

export default function HerbLists(){
    const [loadStatus, setLoadStatus] = useState(true);
    const [petsData, setPetsData] = useState(_____);

    useEffect(()=>{
        try {
            const _____ = _____() => {
                const pets = _____ fetch(
                    '_____'
                );
                if(pets.ok){
                    const petsJson = await pets.json();
                    _____(petsJson);
                }else{
                    alert('[ERR] Unable to read data.');
                }
            }
            fetchPetsData().catch(console.error);
            setLoadStatus(false);
            console.log('Fetch pets data.');
        } catch (error) {
            alert('[ERR] An error occurs when reading the data.');
        }
    }, [loadStatus]);

    const handleDelete = (petId) => {
        try {
            const fetchData = async() => {
                const petData = await fetch(
                    `http://_____/${_____}`,
                    { 
                        method: '_____'
                    }
                );
                if(petData.ok){
                    const myJson = await petData.json();
                    alert(myJson.message);
                }else{
                    alert('[ERR] An error when deleting data.');
                }
            } 
            _____();
            setLoadStatus(true);
        } catch (error) {
            alert('[ERR] An error occurs when deleting the data.');
        }
    }
    
    return (
    <div className="m-3">
        <a href='_____'>[ เพิ่มข้อมูลสัตว์เลี้ยง ]</a>
        <h1 className="font-bold">รายการสัตว์เลี้ยง</h1>
        {
            petsData.map((p_item, index) => 
            <div key={index}>
                <div className="font-bold p-2 m-2 border-2 rounded-lg">
                    ชื่อสัตว์เลี้ยง: {_____}<br/>
                    ประเภท: {_____}<br/>
                    วันเกิด: {_____}<br/>
                    เจ้าของ: {_____}<br/>
                </div>
                <div className="p-2 m-2">
                    <a href={`/lab02/petDetail/${_____}`}>[ รายละเอียด ]</a>
                    <a href={`/lab02/_____/${p_item.petId}`}>[ แก้ไข ]</a>
                    <a href="#" onClick={(e) => _____(`${_____}`)}>[ ลบ ]</a>
                </div>
            </div>
            )
        }
    </div>
    );
}