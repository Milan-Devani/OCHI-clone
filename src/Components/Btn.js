import React from 'react';

function Btn({ btn_name, size }) {
    const fontSize = size === 'large' ? '15px' : '14px';

    return (
        <div>
            <button className='btn_Featured btn-reuse align-middle flex justify-between rounded-full bg-[#212121] text-white py-[6px] pl-[25px] pr-[6px]'
                style={{ fontSize }}>
                <span className='uppercase align-middle'>{btn_name}</span>
                <div className='btn_Featured_div btn_reuse_div ml-[25px] w-[50px] h-[50px]'>
                    <span className='btn_Featured_div_span btn_reuse_div_span'>
                        <i className="fa-solid fa-arrow-up fa-rotate-by" style={{ color: '#fff', '--fa-rotate-angle': '45deg' }}></i>
                    </span>
                </div>
            </button>
        </div>
    );
}

export default Btn;
