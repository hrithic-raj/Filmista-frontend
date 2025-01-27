import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import LoadingPage from '../../../components/LoadingPage';
import { TickSVG } from '../../../assets/svg/SVGs';
import { addUserLanguages, fetchAllLanguages, onSelectLanguage } from '../../../redux/slices/user/languageSlice';

const LanguageSelector = () => {
    const navigate =useNavigate();
    const dispatch = useAppDispatch();
    const { languages , loading, langId } = useAppSelector((state)=>state.language)

    useEffect(()=>{
        dispatch(fetchAllLanguages());
    },[dispatch])
    const toggleGenre = (id: string) => {
        if (langId.includes(id)) {
            dispatch(onSelectLanguage(langId.filter((langId) => langId !== id)));
        } else {
            console.log(langId)
            dispatch(onSelectLanguage([...langId, id]));
        }
    };
    const proceed = async() => {
        await dispatch(addUserLanguages(langId));
        navigate("/select-genres");
    };
    if(loading) return <LoadingPage/>
    return (
        <div className="max-h-screen pt-[20px] flex flex-col p-1 sm:p-6">
        <h1 className="text-2xl font-bold text-gray-200 mb-10">Choose Your Favorite Genres</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 px-5 sm:px-[10%] gap-x-10 gap-y-8 sm:gap-x-20 sm:gap-y-8 max-h-[15%] overflow-auto custom-scrollbar">
            {languages.map((language) => (
                <div
                key={language._id}
                className={`relative w-72 h-40 rounded-lg overflow-hidden cursor-pointer shadow-2xl shadow-gray-900 drop-shadow-2xl `}
                onClick={() => toggleGenre(language._id)}
                >
                <img src={language.poster} alt={language.language} className="w-full h-full object-cover" />
                <div className='absolute bottom-0 w-full h-full bg-gradient-to-bl from-black to-gray-700 opacity-30'/>
                <p className="absolute bottom-4 text-white text-xl font-bold w-full pl-5">
                {language.language}
                </p>
                    <div
                        className={`absolute inset-0 flex items-center justify-center ${
                            langId.includes(language._id) ? "block" : "hidden"
                        }`}
                    >
                        <div className='w-full h-full bg-gradient-to-bl from-[#5cfef0] to-gray-700 opacity-50'/>
                        <TickSVG/>
                    </div>
                </div>
          ))}
        </div>
        <div className='flex justify-end p-3 sm:pr-[10%]'>
            <button
            className="bottom-5 right-[10%] px-6 py-2 border-4 border-[#5cfef0] text-white text-xl font-semibold hover:text-black rounded-lg  hover:bg-[#5cfef0]"
            onClick={proceed}
            >
            Continue
            </button>
        </div>
      </div>
  )
}

export default LanguageSelector