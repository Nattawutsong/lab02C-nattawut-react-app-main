import { useState, useEffect } from "react";
import { useNavigate, useParams } from "@remix-run/react";

export default function PetEditForm(){
    const navigate = useNavigate();
    const myParams = useParams();
    const petId = myParams._____;
    const [petData, setPetData] = useState({
        _____
    });
    const [typeOption, setTypeOption] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPetData({
          ...petData,
          [name]: value
        });
    };

    useEffect(() => {
        try {
            const fetchPetData = async () => {
                const petData = await fetch(`_____/${_____}`);
                if (petData.ok) {
                    const petJson = await petData.json();
                    setPetData(_____);
                    _____(petJson.petType);
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

    const handleSubmit = async(e) => {
      e.preventDefault();
      if(confirm('Confirm the information update?')){
        const form = e.target;
        const formData = new FormData(form);  
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        
        try {
            const resPet = await fetch('_____', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: _____.stringify(formJson),
            });
    
            if(resPet.ok){
                const myJson = await resPet.json();
                alert(`${myJson.message}`);
                navigate('_____');
            }else{
                alert('[ERR] Failed to update the form.');
            }
        } catch (error) {
            alert('[ERR] An error occurred while updatting the form.');
        }
        return true;
      }
    }

    return (
        <div className="m-3">
            <a href='/lab02/petLists'>[ ข้อมูลสัตว์เลี้ยง ]</a>
            <h1 className="font-bold">อัปเดตข้อมูลสัตว์เลี้ยง</h1>
            <form method="POST" onSubmit={_____}>
            <input type="hidden" name="petId" value={_____} />
            <label>ชื่อสัตว์เลี้ยง (*)</label>:<br />
            <input type="text" name="petName" id="petName" className="border rounded-lg p-2 w-1/2"
            onChange={_____} value={_____} required /><br />
            <label>รายละเอียด</label>:<br />
            <textarea rows={3} cols={50} name="petNote" id="petNote" className="border rounded-lg p-2 w-1/2"
                onChange={_____} value={_____}
            /><br />
            <label>ประเภท (*)</label>:<br />
            <select name="petType" id="petType" className="border rounded-lg p-2 w-1/2"
            value={_____} onChange={_____} required>
                <option value="">-เลือกประเภท-</option>
                <option value={10}>สุนัข</option>
                <option value={20}>แมว</option>
                <option value={30}>ฮิปโป</option>
                <option value={40}>นก</option>
                <option value={50}>อื่น ๆ</option>
            </select><br />
            <label>วันเกิด (*)</label>:<br />
            <textarea rows={3} cols={50} name="petBD" id="petBD" className="border rounded-lg p-2 w-1/2"
                onChange={_____} value={_____} required
            /><br />
            <label>เจ้าของ</label>:<br />
            <input type="text" name="petOwner" id="petOwner" className="border rounded-lg p-2 w-1/2"
            onChange={_____} value={_____} /><br />
            <div className="p-3">
                <button type="_____">[ Submit ]</button>
                <button type="reset">[ Reset ]</button>
            </div>
            </form>
        </div>
    );
}