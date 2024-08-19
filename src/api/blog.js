const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const postBlogFn = async (data) => {
  const token = sessionStorage.getItem('token');

  const res = await fetch(`${BACKEND_URL}/blog`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Ocurrió un error guardando la entrada');
  }
};

export const getBlogsFn = async () => {
  const res = await fetch(`${BACKEND_URL}/blog`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error('Ocurrió un error leyendo las entradas del blog');
  }

  return data;
};

export const getBlogFn = async (blogId) => {
  const res = await fetch(`${BACKEND_URL}/blog/${blogId}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      'Ocurrió un error leyendo la entrada del blog seleccionado'
    );
  }

  return data;
};

export const deleteBlogFn = async (blogId) => {
  const token = sessionStorage.getItem('token');

  const res = await fetch(`${BACKEND_URL}/blog/${blogId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(
      'Ocurrió un error intentando eliminar el blog seleccionado'
    );
  }
};

export const putBlogFn = async ({ blogId, data }) => {
  const token = sessionStorage.getItem('token');

  const res = await fetch(`${BACKEND_URL}/blog/${blogId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Ocurrió un error intentando editar el blog seleccionado');
  }
};