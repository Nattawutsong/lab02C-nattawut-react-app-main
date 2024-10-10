import { useState } from "react";
import { useNavigate } from "@remix-run/react";

export default function PetFrom(){
    const navigate = useNavigate();

    const _____ = _____(e) => {
        e._____();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(_____);

        try { 
            const resHerb = _____ fetch(
                '_____',
                {
                    method: '_____',
                    headers: {
                        'Content-Type': '_____'
                    },
                    body: JSON.stringify(_____)
                }
            );

            if(resPet.ok){
                const data = await _____.json();
                alert(`${data.message}`);
                navigate('_____');
            }else{
                alert('[ERR] Failed to update the form.');
            }

        } catch (error) {
            alert('[ERR] An error occurred while updatting the form.');
        }
    }

    return (
    <div className="m-3">
        <a href='_____'>[ ข้อมูลสัตว์เลี้ยง ]</a>
        <h1 className="font-bold">เพิ่มข้อมูลสัตว์เลี้ยง</h1>
        <form method="POST" onSubmit={handleSubmit}>
        <label>ชื่อสัตว์เลี้ยง (*):</label><br/>
        <input type="text" name="_____" className="border rounded-lg p-2 w-1/2" required /><br/>
        <label>รายละเอียด</label><br/>
        <textarea rows={3} cols={50} name="_____" className="border rounded-lg p-2 w-1/2" /><br/>
        <label>ประเภท (*)</label>:<br />
        <select name="_____" id="petType" className="border rounded-lg p-2 w-1/2" required>
            <option value="">-เลือกประเภท-</option>
            <option value={10}>สุนัข</option>
            <option value={20}>แมว</option>
            <option value={30}>ฮิปโป</option>
            <option value={40}>นก</option>
            <option value={50}>อื่น ๆ</option>
        </select><br />
        <label>วันเกิด (*)</label>:<br />
        <textarea rows={3} cols={50} name="_____" id="petBD" className="border rounded-lg p-2 w-1/2" required /><br />
        <label>ชื่อเจ้าของ (*)</label>:<br />
        <input type="text" name="_____" id="petOwner" className="border rounded-lg p-2 w-1/2" placeholder="ระบุชื่อ-สกุลนักศึกษา" required /><br />
        <button type="_____">[ บันทึก ]</button>
        <button type="reset">[ เคลียร์ ]</button>
        </form>
    </div>
    );
}