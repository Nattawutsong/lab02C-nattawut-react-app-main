import { useState, useEffect } from "react";
import { useNavigate, useParams } from "@remix-run/react";

export default function HerbDetail(){
    const myParams = useParams();
    const petId = _____.petId;
    const [petData, setPetData] = useState({
        _____
    });

    useEffect(() => {
        try {
            const fetchPetData = async () => {
                const petData = await fetch(`_____/${_____}`);
                if (petData.ok) {
                    const petJson = await petData.json();
                    _____(petJson);
                    console.log(petJson);
                } else {
                    alert('[ERR] Failed to loaded data.');
                }
            }

            _____().catch(console.error);
        } catch (error) {
            alert('[ERR] An error occurred while loading the data.');
        }
    }, []);

    return (
    <div className="m-3">
        <a href='_____'>[ ข้อมูลสัตว์เลี้ยง ]</a>
        <h1 className="font-bold">รายละเอียดสัตว์เลี้ยง</h1>
        {
            <div key={_____}>
                <div className="font-bold p-2 m-2 border-2 rounded-lg">
                    ชื่อสัตว์เลี้ยง: {_____}<br/>
                    รายละเอียด: {_____}<br/>
                    ประเภท: {_____}<br/>
                    วันเกิด: {_____}<br/>
                    เจ้าของ: {_____}<br/>
                </div>
            </div>
        }
        <a href='/lab02/petLists'>[ ย้อนกลับ ]</a>
    </div>
    );
}