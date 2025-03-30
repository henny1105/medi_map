import { PharmacyDto } from '@/dto/PharmacyDto';
import { getTodayOperatingHours, isPharmacyOpenNowToday } from '@/utils/pharmacy/pharmacyUtils';

interface PharmacyTimeListProps {
  pharmacy: PharmacyDto;
}

const PharmacyTimeList: React.FC<PharmacyTimeListProps> = ({ pharmacy }) => {
  const { openTime, closeTime } = getTodayOperatingHours(pharmacy);
  const isOpen = isPharmacyOpenNowToday(pharmacy);

  return (
    <div className={`pharmacy_time_list ${isOpen ? 'open' : 'closed'}`}>
      <p>
        <span className={isOpen ? 'status_open' : 'status_closed'}>
          {isOpen ? "영업중" : "미영업"}
        </span>
        {openTime} ~ {closeTime}
      </p>
    </div>
  );
};

export default PharmacyTimeList;