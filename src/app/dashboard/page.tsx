import Header from '@/components/Header'
import Overview from '@/components/dashboard/Overview'
import Status from '@/components/dashboard/Status'
import Link from 'next/link'
import React from 'react'
import { HiMiniUserGroup } from 'react-icons/hi2'
import TwitterProfile from '@/components/dashboard/TwitterProfile';
import PlannedTask from '@/components/dashboard/PlannedTask'

const Dashboard = () => {
    return (
        <main className='container pt-20 pb-10'>
            <Header />
            <Status />
            <Overview
                rank={10}
                referrals={16}
                users={100}
                referralCode={"gzrhjtw5"} />
            <div className="my-8">
                <Link
                    href={"/dashboard/referral"}
                    className="referral-container"
                >
                    <div className="bg-[#f5f5f5] dark:bg-[#23262D] p-3 rounded-lg">
                        <HiMiniUserGroup className="text-2xl text-black dark:text-white" />
                    </div>
                    <div>
                        <h3>Invite Friends</h3>
                        <p className="text-[10px] text-[#989898]">
                            The more users you refer , the more $FOUND you earn
                        </p>
                    </div>
                </Link>
            </div>
            <PlannedTask />
            <TwitterProfile />
        </main>
    )
}

export default Dashboard