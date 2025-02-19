var $select = document.querySelector('#type');
var $etc1 = document.querySelector('#etc1');
var $etc2 = document.querySelector('#etc2');
var $divService = document.querySelector('#div-service');

const $confirmReserve = document.querySelector('#confirm-reserve');
const $cancelReserve = document.querySelector('#cancel-reserve');
const $submitReserve = document.querySelector('#submit-reserve');

const $step01 = document.querySelector('#step01');
const $step02 = document.querySelector('#step02');

const dbConnect = supabase.createClient('https://rnzhzcfovaqfsjfxorfq.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuemh6Y2ZvdmFxZnNqZnhvcmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjQ4MzAsImV4cCI6MjA1NTAwMDgzMH0.lC3jUF1yLH5RA0rMZ-ApWOuoTmWHQT7b1ihZXR50xhM');

$select.addEventListener('change', function (e) {
    if (e.target.value === 'jim-keep') {
        $etc1.classList.remove('hidden');
        $etc2.classList.add('hidden');
        $divService.classList.remove('h-20');
        $divService.classList.add('h-100');
    } else if (e.target.value === 'jim-move') {
        $etc1.classList.add('hidden');
        $etc2.classList.remove('hidden');
        $divService.classList.remove('h-20');
        $divService.classList.add('h-100');
    } else {
        $etc1.classList.add('hidden');
        $etc2.classList.add('hidden');
        $divService.classList.remove('h-100');
        $divService.classList.add('h-20');
    }
});

$confirmReserve.addEventListener('click', function (e) {
    $step01.classList.add('hidden');
    $step02.classList.remove('hidden');
});

$cancelReserve.addEventListener('click', function (e) {
    $step02.classList.add('hidden');
    $step01.classList.remove('hidden');
})

$submitReserve.addEventListener('click', async function (e) {
    await dbConnect.from('reservation').insert([
        {
            id: 1,  // 실제 고객 ID로 변경
            use_date: '2025-02-07', // 예약 날짜 (YYYY-MM-DD)
            departure_time: '10:00:00', // 출발 시간 (HH:MM:SS)
            departure_location: 'Seoul Station', // 출발 장소
            arrival_time: '12:00:00', // 도착 시간 (HH:MM:SS)
            arrival_location: 'Busan Station', // 도착 장소
            shopping_bag_count: 2, // 쇼핑백 개수
            carrier_small_count: 1, // 작은 캐리어 개수
            carrier_large_count: 0, // 큰 캐리어 개수
            other_items: 'Umbrella, Backpack', // 기타 물품
            inquiries: 'Handle with care', // 문의 사항
            status: 'pending', // 예약 상태
            total_price: 50000, // 총 가격
            payment_status: 'pending', // 결제 상태
        }
    ])
})

//페이지 랜더링(html, css 화면이 보여지는 것) 끝나자마자 바로 실행.
