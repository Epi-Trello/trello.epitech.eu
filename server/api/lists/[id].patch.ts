export default defineEventHandler(async (event) => {
  const session = await auth.api.getSession(event)

  if (!session) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  const list = await prisma.list.update({
    where: { id, board: { ownerId: session.user.id } },
    data: body
  })

  return list
})
