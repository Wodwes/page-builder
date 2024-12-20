<!-- image/ icons/video -->
<script setup>
import { Icon } from '@iconify/vue';
import LinkComponent from '../AccordionStyle/LinkComponent.vue';
const width = ref(0);
const height = ref(0);
const TranformItems = [[{ label: 'Thumbnails (150 x 150 )' }, { label: 'Medium(300 x 300)' }, { label: 'Medium Large(768 x 768)' }, { label: 'Large (1024 x 1024)' }, { label: '1536 x 1536 - 1536 x 1536' }, { label: '2048 x 2048 - 2048 x 2048' }, { label: 'Full' }, { label: 'Custom' }]];
const TranformDropdown = ref(false);
// Define an array of alignment options
const alignments = [
  { icon: 'mingcute:align-left-line', label: 'Align Left' },
  { icon: 'mingcute:align-center-line', label: 'Align Center' },
  { icon: 'mingcute:align-right-line', label: 'Align Right' },
];
const FontSizeValidate = (event) => {
  const input = event.target;
  let value = parseInt(input.value, 10);

  // Enforce min and max values
  if (value < -100) {
    input.value = -100;
  } else if (value > 100) {
    input.value = 100;
  }
};
</script>

<template>
  <div class="h-auto w-full max-w-80 overflow-hidden p-4">
    <h1 class="mb-2 text-sm font-bold text-gray-800">Image</h1>
    <!-- Image section  -->
    <div class="flex w-full flex-col border-b pb-2">
      <p class="mb-2 object-fill text-start text-xs text-gray-500">Upload Image:</p>
      <div class="flex flex-row items-center justify-end overflow-hidden rounded-md border text-xs">
        <div class="w-full rounded-md border-2 border-dashed py-4 text-center">
          <input type="file" id="file-upload" class="hidden" />
          <label for="file-upload" class="inline-block cursor-pointer rounded border px-4 py-2 text-sm font-medium text-gray-500"> Choose File </label>
          <p class="mt-2 text-sm text-gray-500">Drag and drop your image here or click to upload</p>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-row items-center justify-between gap-6 border-b py-2">
      <p class="text-xs text-gray-500">Image Resolution:</p>
      <div class="flex flex-row items-center justify-end rounded-md border">
        <UDropdown v-model:open="TranformDropdown" :items="TranformItems" :popper="{ placement: 'bottom-start' }">
          <UButton color="white" label="Default" trailing-icon="i-heroicons-chevron-down-20-solid" class="text-xs text-gray-500" />
          <template #item="{ item }">
            <div class="py w-full cursor-pointer px-1 text-start text-xs hover:bg-gray-100">
              {{ item.label }}
            </div>
          </template>
        </UDropdown>
      </div>
    </div>
    <!-- Caption Section -->
    <div class="flex w-full flex-row items-center gap-5 border-b py-2">
      <p class="object-fill text-start text-xs text-gray-500">Caption:</p>
      <div class="flex flex-row items-center justify-end overflow-hidden rounded-md border text-xs">
        <input type="text" class="w-full py-1 indent-3 text-xs focus:outline-none" placeholder="Caption" />
      </div>
    </div>
    <!-- Link Section -->
    <LinkComponent label="link" />

    <!-- Alignment Section -->
    <div class="flex w-full flex-row items-center justify-between gap-6 border-b py-3">
      <p class="text-xs text-gray-500">Alignment:</p>
      <div class="flex flex-row items-center justify-evenly divide-x rounded-md border">
        <template v-for="(alignment, index) in alignments" :key="index">
          <button>
            <Icon :icon="alignment.icon" width="24" height="24" class="p-0.5 text-gray-500 hover:bg-gray-100" :class="{ 'border-r': index < alignments.length - 1 }" />
          </button>
        </template>
      </div>
    </div>
    <!-- width Section -->
    <div class="grid w-full grid-cols-[20%_1fr] items-center gap-5 border-b py-2">
      <p class="object-fill text-start text-xs text-gray-500">Width:</p>
      <template>
        <URange v-model="width" :min="0" :max="100" color="gray" size="sm" />
      </template>
    </div>
    <!-- Height Section -->
    <div class="grid w-full grid-cols-[20%_1fr] items-center gap-5 border-b py-2">
      <p class="object-fill text-start text-xs text-gray-500">Height:</p>
      <template>
        <URange v-model="height" :min="0" :max="100" color="gray" size="sm" />
      </template>
    </div>
    <!-- z-Index Size  -->
    <div class="flex w-full flex-row items-center justify-between border-b py-2">
      <p class="text-start text-xs text-gray-500">Z-Index:</p>
      <div class="flex flex-row items-center justify-end overflow-hidden rounded-md border text-xs">
        <input @input="FontSizeValidate" type="number" class="w-12 py-1 indent-3 text-xs" min="-100" max="100" placeholder="0" />
      </div>
    </div>
    <!-- margin  -->
    <div class="flex w-full flex-col items-start justify-between border-b pb-3 pt-2">
      <p class="mb-1 text-start text-xs text-gray-500">Margin:</p>
      <div class="box-content grid w-full grid-cols-5 items-center gap-2 divide-x rounded-md border text-xs text-gray-500">
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div class="flex items-center justify-center px-2">PX</div>
      </div>
      <div class="box-content grid w-full grid-cols-5 items-center gap-1 px-2 text-[10px] text-gray-500">
        <div>Top</div>
        <div>Right</div>
        <div>Bottom</div>
        <div>Left</div>
        <div></div>
      </div>
    </div>
    <!-- Padding  -->
    <div class="flex w-full flex-col items-start justify-between border-b pb-3 pt-2">
      <p class="mb-1 text-start text-xs text-gray-500">Padding:</p>
      <div class="box-content grid w-full grid-cols-5 items-center gap-2 divide-x rounded-md border text-xs text-gray-500">
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div class="flex items-center justify-center px-2">PX</div>
      </div>
      <div class="box-content grid w-full grid-cols-5 items-center gap-1 px-2 text-[10px] text-gray-500">
        <div>Top</div>
        <div>Right</div>
        <div>Bottom</div>
        <div>Left</div>
        <div></div>
      </div>
    </div>
    <!-- Border  -->
    <div class="flex w-full flex-col items-start justify-between border-b pb-3 pt-2">
      <p class="mb-1 text-start text-xs text-gray-500">Border:</p>
      <div class="box-content grid w-full grid-cols-5 items-center gap-2 divide-x rounded-md border text-xs text-gray-500">
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div class="flex items-center justify-center px-2">PX</div>
      </div>
      <div class="box-content grid w-full grid-cols-5 items-center gap-1 px-2 text-[10px] text-gray-500">
        <div>Top</div>
        <div>Right</div>
        <div>Bottom</div>
        <div>Left</div>
        <div></div>
      </div>
    </div>
    <!-- Border radius  -->
    <div class="flex w-full flex-col items-start justify-between border-b pb-3 pt-2">
      <p class="mb-1 text-start text-xs text-gray-500">Border Radius:</p>
      <div class="box-content grid w-full grid-cols-5 items-center gap-2 divide-x rounded-md border text-xs text-gray-500">
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" placeholder="0" /></div>
        <div class="flex items-center justify-center px-2">PX</div>
      </div>
      <div class="box-content grid w-full grid-cols-5 items-center gap-1 px-2 text-[10px] text-gray-500">
        <div>Top</div>
        <div>Right</div>
        <div>Bottom</div>
        <div>Left</div>
        <div></div>
      </div>
    </div>

    <!-- main div end  -->
  </div>
</template>
