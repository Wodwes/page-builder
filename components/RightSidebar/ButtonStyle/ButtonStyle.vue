<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="w-full max-w-80 overflow-hidden p-4">
    <h1 class="mb-2 text-sm font-bold text-gray-800">Button</h1>
    <!-- Button Text Section -->
    <div class="flex w-full flex-col border-b py-2">
      <p class="object-fill text-start text-xs text-gray-500">Button Text:</p>
      <div class="flex flex-row items-center justify-end overflow-hidden rounded-md border text-xs">
        <input type="text" class="w-full py-1 indent-3 text-xs focus:outline-none" placeholder="Text" />
      </div>
    </div>
    <!-- Button Link Section -->
    <div class="flex w-full flex-col border-b py-2">
      <p class="object-fill text-start text-xs text-gray-500">Button Link:</p>
      <div class="flex flex-row items-center justify-end overflow-hidden rounded-md border text-xs">
        <input type="text" class="w-full py-1 indent-3 text-xs focus:outline-none" placeholder="Link" />
      </div>
    </div>
    <!-- icon section  -->
    <div class="flex w-full flex-col border-b py-2">
      <p class="object-fill text-start text-xs text-gray-500">Icon:</p>
      <div class="flex flex-row items-center justify-end overflow-hidden rounded-md border text-xs">
        <input type="file" class="w-full py-1 indent-3 text-xs focus:outline-none" placeholder="Link" />
      </div>
    </div>
    <!-- Text Color  -->
    <div class="flex w-full flex-row items-center justify-between border-b py-2">
      <p class="text-start text-xs text-gray-500">Text Color:</p>
      <div class="flex flex-row items-center justify-end overflow-hidden rounded-md border text-xs">
        <input type="color" class="w-6 bg-white p-1 indent-3 text-xs" />
      </div>
    </div>
    <!-- Background Color  -->
    <div class="flex w-full flex-row items-center justify-between border-b py-2">
      <p class="text-start text-xs text-gray-500">Background Color:</p>
      <div class="flex flex-row items-center justify-end overflow-hidden rounded-md border text-xs">
        <input type="color" class="w-6 bg-white p-1 indent-3 text-xs" />
      </div>
    </div>
    <!-- margin  -->
    <div class="flex w-full flex-col items-start justify-between border-b pb-3 pt-2">
      <p class="mb-1 text-start text-xs text-gray-500">Margin:</p>
      <div class="box-content grid w-full grid-cols-5 items-center gap-2 divide-x rounded-md border text-xs text-gray-500">
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
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
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
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
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
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
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="MarginValidate" /></div>
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
