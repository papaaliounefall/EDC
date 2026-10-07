const endpoint = import.meta.env.VITE_FORMSPREE_URL as string | undefined;

export const isFormspreeConfigured = Boolean(endpoint);

/**
 * Transmet une demande à Formspree (POST JSON).
 * En dev sans configuration, la demande est simulée pour permettre la prévisualisation.
 * En production sans configuration, une erreur explicite est levée (aucun faux envoi).
 */
export async function submitToFormspree(payload: Record<string, unknown>): Promise<void> {
  if (!endpoint) {
    if (import.meta.env.DEV) {
      console.warn(
        '[EDC] VITE_FORMSPREE_URL manquant — demande simulée (non transmise). ' +
          'Renseignez-le dans .env.local pour activer l’envoi réel.',
      );
      return;
    }
    throw new Error(
      'Formulaire momentanément indisponible. Contactez-nous directement par téléphone ou WhatsApp.',
    );
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = (await res.json().catch(() => null)) as { error?: string } | null;
    throw new Error(data?.error ?? 'La transmission a échoué. Veuillez réessayer ou nous contacter directement.');
  }
}
