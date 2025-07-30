'use client'

import { useState } from 'react';
import ComponentCard from '../common/ComponentCard'
import DashboardPagination from '../customUI/pagination/Pagination';
import AddBanner from './AddBanner';
import { AppWindowIcon, CodeIcon } from "lucide-react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import BannerTable from './BannerTable';
import BannerSlider from './BannerSlider';
import { useGetAllDashboardBannersQuery } from '@/redux/api/bannerApi';


const BannerPageComponent = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [activeTab, setActiveTab] = useState<'table' | 'slider'>('table');

  const { data: banners, isLoading } = useGetAllDashboardBannersQuery({});

  const bannersList = banners?.data || [];
  return (
    <div className="space-y-6">
      <ComponentCard buttonTitle='Add' setAddModalOpen={setAddModalOpen}>
        <div>
          <div className="flex w-full flex-col gap-6">
            {/* <Tabs defaultValue="table">
              <TabsList>
                <TabsTrigger value="table">Table view</TabsTrigger>
                <TabsTrigger value="slider">Slider view</TabsTrigger>
              </TabsList>
              <TabsContent value="table" className='w-full'>
                <div>
                  <BannerTable />
                </div>
              </TabsContent>
              <TabsContent value="slider">

              </TabsContent>
            </Tabs> */}

            {/* Custom Tabs */}
            <div className="flex space-x-4 border-b border-gray-200 dark:border-gray-700">
              <button
                className={`py-2 px-4 text-sm font-medium ${activeTab === 'table'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 dark:text-gray-300'
                  }`}
                onClick={() => setActiveTab('table')}
              >
                Table view
              </button>
              <button
                className={`py-2 px-4 text-sm font-medium ${activeTab === 'slider'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 dark:text-gray-300'
                  }`}
                onClick={() => setActiveTab('slider')}
              >
                Gallery view
              </button>
            </div>

            {/* Tab Content */}
            <div className="w-full">
              {activeTab === 'table' && (
                <div className="w-full">
                  <BannerTable bannersList={bannersList} />
                </div>
              )}

              {activeTab === 'slider' && (
                <div className="w-full">
                  <BannerSlider bannersList={bannersList} />
                </div>
              )}
            </div>
          </div>

          {/* Pagination */}
          {activeTab === 'table' && <div>
            <DashboardPagination limit={limit} page={page} setLimit={setLimit} setPage={setPage} totalData={20} />
          </div>}
        </div>
      </ComponentCard>

      {addModalOpen && (
        <>
          <AddBanner
            open={addModalOpen}
            onOpenChange={setAddModalOpen}
          />
        </>
      )}
    </div>
  )
}

export default BannerPageComponent