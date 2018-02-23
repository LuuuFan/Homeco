export const fetchContractorSchedules = (category) => (
  $.ajax({
    url: `/api/schedules/cont/${category}`,
    method: 'GET'
  })
);

export const createSchedule = (payload) => (
 $.ajax({
   url: '/api/schedules',
   method: 'POST',
   data: payload
 })
);

export const fetchUserSchedules = (userId, completed) => (
  $.ajax({
    url: `/api/schedules/${userId}/${completed}`,
    method: 'GET'
  })
);

export const reschedule = (id, workDate) => (
  $.ajax({
    url: `/api/schedule`,
    method: 'PATCH',
    data: {
      id: id,
      workDate: workDate
    }
  })
);
