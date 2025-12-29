import { generateId } from 'better-auth'

export default defineEventHandler(async (event) => {
  const session = await auth.api.getSession(event)

  if (!session) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const { data, error } = await readValidatedBody(event, CardInputSchema.safeParse)

  if (error) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Unprocessable Content',
      message: error.issues[0]?.message,
      data: error.issues
    })
  }

  const card = await prisma.card.create({
    data: {
      id: generateId(),
      title: data.title,
      description: data.description,
      position: data.position,
      startDate: data.startDate,
      dueDate: data.dueDate,
      listId: data.listId
    }
  })

  return card
})
