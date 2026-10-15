const contactEndpoint = import.meta.env.VITE_FORMSPREE_URL as string | undefined;
const devisEndpoint = import.meta.env.VITE_FORMSPREE_URL_DEVIS as string | undefined;

/** Type de demande : distingue le formulaire de contact du formulaire de devis. */
export type FormspreeForm = 'contact' | 'devis';

/**
 * Un formulaire Formspree par type de demande, chacun avec son propre destinataire
 * configuré côté Formspree :
 *  - 'contact' → demandes générales (destinataire contact@edc.sn)
 *  - 'devis'   → demandes de devis (destinataire commercial@edc.sn)
 * Tant que VITE_FORMSPREE_URL_DEVIS n'est pas défini, les devis retombent sur le
 * formulaire de contact (comportement d'origine, à une seule adresse).
 */
const endpoints: Record<FormspreeForm, string | undefined> = {
  contact: contactEndpoint,
  devis: devisEndpoint ?? contactEndpoint,
};

export const isFormspreeConfigured = Boolean(contactEndpoint);

/**
 * Transmet une demande à Formspree (POST JSON).
 * En dev sans configuration, la demande est simulée pour permettre la prévisualisation.
 * En production sans configuration, une erreur explicite est levée (aucun faux envoi).
 */
export async function submitToFormspree(
  form: FormspreeForm,
  payload: Record<string, unknown>,
): Promise<void> {
  const endpoint = endpoints[form];

  if (!endpoint) {
    if (import.meta.env.DEV) {
      console.warn(
        `[EDC] Endpoint Formspree manquant pour « ${form} » — demande simulée (non transmise). ` +
          'Renseignez VITE_FORMSPREE_URL (contact) et VITE_FORMSPREE_URL_DEVIS (devis) dans .env.local.',
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
