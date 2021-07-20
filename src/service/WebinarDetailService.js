import { request, RequestOptions } from '@/utils/request';
import { API, GET_REQUEST } from '@/utils/constants';

const WebinarDetailService = {
  getWebinarDetail: async (slug) => {
    const result = await request(
      `${API.WEBINAR_PUBLIC_DETAIL_PAGE}/${slug}`,
      RequestOptions(GET_REQUEST, null, false),
    );
    if (result) {
      const pageDetail = result;
      return {
        id: pageDetail?.id,
        slug: pageDetail?.slug,
        title: pageDetail?.title,
        author: pageDetail?.author?.username,
        description: pageDetail?.description,
        price: pageDetail?.price,
        timezone: pageDetail?.timezone?.label,
        duration: pageDetail?.duration,
        schedules: pageDetail?.schedules,
      };
    }
    return null;
  },
  getWebinarList: async () => {
    const result = await request(
      `${API.WEBINAR_PUBLIC_DETAIL_PAGE}`,
      RequestOptions(GET_REQUEST, null, false),
    );
    return result;
  },
};

export default WebinarDetailService;
