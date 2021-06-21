import { request, RequestOptions } from '@/utils/request';
import { API, GET_REQUEST } from '@/utils/constants';

const WebinarDetailService = {
  getWebinarDetail: async (slug) => {
    const result = await request(
      `${API.WEBINAR_PUBLIC_DETAIL_PAGE}/${slug}`,
      RequestOptions(GET_REQUEST, null, false),
    );
    if (result?.length > 0) {
      const [pageDetail] = result;
      return {
        id: pageDetail?.id,
        slug: pageDetail?.slug,
        title: pageDetail?.title,
        author: pageDetail?.author?.fullName,
        description: pageDetail?.description,
        price: pageDetail?.price,
        timezone: pageDetail?.timezone?.label,
      };
    }
    return null;
  },
};

export default WebinarDetailService;
