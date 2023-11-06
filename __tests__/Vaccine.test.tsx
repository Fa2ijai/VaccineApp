import HospitalCatalog from '@/components/้hospitalCatalog';
import {render,screen,waitFor} from '@testing-library/react';

const mockVaccine = {
  success: true,
  count: 2,
  "data": [
    {
      "_id": "652158d428a2486d4de4e019",
      "name": "Chulalongkorn Hospital",
      "address": "1873 Rama IV Rd",
      "district": "Pathum Wan",
      "province": "Bangkok",
      "postalcode": "10330",
      "tel": "026494000",
      "picture": "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
      "__v": 0,
      "id": "652158d428a2486d4de4e019"
    },
    {
      "_id": "6521590a28a2486d4de4e01c",
      "name": "Rajavithi Hospital",
      "address": "2 Phaya Thai Rd, Thung Phaya Thai",
      "district": "Ratchathewi",
      "province": "Bangkok",
      "postalcode": "10400",
      "tel": "022062900",
      "picture": "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
      "__v": 0,
      "id": "6521590a28a2486d4de4e01c"
    }
    ]
};

describe('Hospital Catalog',()=>{
    it('should have correct number of car images',async ()=>{
        const hospitalCatalog = await HospitalCatalog({hospitalJson:mockVaccine});
        render(hospitalCatalog)
        await waitFor(()=>{
            const hospitalCard = screen.queryAllByRole('img');
            expect(hospitalCard.length).toBe(2);
        })

    })
});